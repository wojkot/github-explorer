import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReposListItemComponent } from './repos-list-item.component';
import { MaterialModule } from 'src/app/common/material.module';
import { BranchItemComponent } from './branch-item/branch-item.component';
import { CommitItemComponent } from './commit-item/commit-item.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IRepository } from 'src/app/models/repository.model';
import { HttpService } from 'src/services/http.service';
import { IBranch } from 'src/app/models/branch.model';
import { IComment } from 'src/app/models/comment.model';
import { ICommit } from 'src/app/models/commit.model';
import { GithubApiService } from 'src/services/github-api.service';
import { By } from '@angular/platform-browser';

describe('ReposListItemComponent', () => {
  class HttpServiceMock {
    async getRequest(url: string) {
      return new Promise(res => {
        res([{}]);
      });
    }
  }

  class GithubApiServiceStub {
    async requestReposBranchesData(userName: string, repoName: string) {
      return new Promise(res => {
        res([{ name: 'testBranch' } as IBranch]);
      });
    }
    async requestReposCommentsData(userName: string, repoName: string) {
      return new Promise(res => {
        res([
          {
            user: {
              login: 'test'
            },
            created_at: '2017-09-06T19:59:03Z',
            body: 'test'
          } as IComment
        ]);
      });
    }
    async requestReposCommitsData(userName: string, repoName: string) {
      return new Promise(res => {
        res([
          {
            commit: {
              author: {
                name: 'test',
                date: '2017-09-06T19:59:03Z'
              },
              message: 'test commit'
            }
          } as ICommit
        ]);
      });
    }
  }

  let component: ReposListItemComponent;
  let fixture: ComponentFixture<ReposListItemComponent>;

  const repoDataMock: IRepository = {
    name: 'test-repo-1',
    language: 'Javascript',
    forks_count: 1,
    open_issues_count: 1,
    updated_at: '2017-09-06T19:59:03Z',
    stargazers_url: 'url',
    description: 'test description'
  };

  const selectors = {
    cardTitle: 'mat-card-title',
    headerStar: '.star-count',
    cardSubtitle: 'mat-card-subtitle',
    forksLabel: '.forks-label',
    issuesLabel: '.issues-label',
    updateLabel: '.update-label',
    repoDetails: '.details',
    branchItemComponent: 'app-branch-item',
    commentItemComponent: 'app-comment-item',
    commitItemComponent: 'app-commit-item'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ReposListItemComponent,
        BranchItemComponent,
        CommitItemComponent,
        CommentItemComponent
      ],
      imports: [MaterialModule, HttpClientModule, BrowserAnimationsModule],
      providers: [
        { provide: HttpService, useClass: HttpServiceMock },
        { provide: GithubApiService, useClass: GithubApiServiceStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposListItemComponent);
    component = fixture.componentInstance;
    component.repoData = repoDataMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display repo data', () => {
    expect(
      fixture.debugElement.query(By.css(selectors.cardTitle)).nativeElement
        .textContent
    ).toEqual('test-repo-1');
    expect(
      fixture.debugElement.query(By.css(selectors.headerStar)).nativeElement
        .textContent
    ).toEqual('0');
    expect(
      fixture.debugElement.query(By.css(selectors.cardSubtitle)).nativeElement
        .textContent
    ).toEqual('test description');
    expect(
      fixture.debugElement.query(By.css(selectors.forksLabel)).nativeElement
        .textContent
    ).toEqual('Forks: 1');
    expect(
      fixture.debugElement.query(By.css(selectors.issuesLabel)).nativeElement
        .textContent
    ).toEqual('Open issues: 1');
    expect(
      fixture.debugElement.query(By.css(selectors.updateLabel)).nativeElement
        .textContent
    ).toEqual('Last update: September 6th 2017, 9:59:03 pm');
  });

  it('should display repo details', () => {
    expect(
      fixture.debugElement.query(By.css(selectors.repoDetails)).nativeElement
        .textContent
    ).not.toBeNull();
  });
});
