import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReposListComponent } from './repos-list.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { BranchItemComponent } from './repos-list-item/branch-item/branch-item.component';
import { CommentItemComponent } from './repos-list-item/comment-item/comment-item.component';
import { CommitItemComponent } from './repos-list-item/commit-item/commit-item.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../common/material.module';
import { IRepository } from '../models/repository.model';
import {
  NoopAnimationsModule,
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import { GithubApiService } from 'src/services/github-api.service';
import { Component, Input } from '@angular/core';

describe('ReposListComponent', () => {
  let component: ReposListComponent;
  let fixture: ComponentFixture<ReposListComponent>;
  const reposDataMock: IRepository[] = [
    {
      name: 'test-repo-1',
      language: 'Javascript',
      forks_count: 1,
      open_issues_count: 1,
      updated_at: '2017-09-06T19:59:03Z',
      stargazers_url: 'url'
    }
  ];

  const selectors = {
    reposListItem: 'app-repos-list-item',
    reposListWrapper: '.repos-list-wrapper',
    notFoundMessage: '.not-found-message'
  };

  @Component({
    selector: 'app-repos-list-item',
    template: '<p>App Repos List Component</p>'
  })
  class ReposListItemComponentMockComponent {
    @Input() repoData;
    @Input() userName;
  }

  class GithubApiServiceStub {
    async requestUsersRepoData(username: string) {
      return new Promise(res => {
        res(reposDataMock);
      });
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ReposListComponent,
        HeaderComponent,
        ReposListComponent,
        ReposListItemComponentMockComponent,
        BranchItemComponent,
        CommentItemComponent,
        CommitItemComponent
      ],
      imports: [
        MaterialModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([]),
        NoopAnimationsModule,
        BrowserAnimationsModule
      ],
      providers: [{ provide: GithubApiService, useClass: GithubApiServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display repos list', () => {
    component.reposData = reposDataMock;
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css(selectors.reposListWrapper))
    ).not.toBeNull();
    expect(
      fixture.debugElement.query(By.css(selectors.reposListItem))
    ).not.toBeNull();
    expect(
      fixture.debugElement.query(By.css(selectors.notFoundMessage))
    ).toBeNull();
  });

  it('should display message of repos not found', () => {
    component.reposData = [];
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css(selectors.reposListWrapper))
    ).toBeNull();
    expect(
      fixture.debugElement.query(By.css(selectors.reposListItem))
    ).toBeNull();
    expect(
      fixture.debugElement.query(By.css(selectors.notFoundMessage))
    ).not.toBeNull();
  });
});
