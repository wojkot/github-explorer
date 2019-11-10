import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './common/material.module';
import { AppRoutingModule } from './app-routing.module';
import { ReposListComponent } from './repos-list/repos-list.component';
import { ReposListItemComponent } from './repos-list/repos-list-item/repos-list-item.component';
import { BranchItemComponent } from './repos-list/repos-list-item/branch-item/branch-item.component';
import { CommitItemComponent } from './repos-list/repos-list-item/commit-item/commit-item.component';
import { CommentItemComponent } from './repos-list/repos-list-item/comment-item/comment-item.component';
import { LandingComponent } from './landing/landing.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        ReposListComponent,
        ReposListItemComponent,
        BranchItemComponent,
        CommitItemComponent,
        CommentItemComponent,
        LandingComponent
      ],
      imports: [
        RouterModule,
        FormsModule,
        MaterialModule,
        AppRoutingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'github-explorer'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('github-explorer');
  });
});
