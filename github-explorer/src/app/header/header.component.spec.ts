
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../common/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { ReposListComponent } from '../repos-list/repos-list.component';
import { ReposListItemComponent } from '../repos-list/repos-list-item/repos-list-item.component';
import { BranchItemComponent } from '../repos-list/repos-list-item/branch-item/branch-item.component';
import { CommitItemComponent } from '../repos-list/repos-list-item/commit-item/commit-item.component';
import { CommentItemComponent } from '../repos-list/repos-list-item/comment-item/comment-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from '../landing/landing.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        ReposListComponent,
        ReposListItemComponent,
        BranchItemComponent,
        CommitItemComponent,
        CommentItemComponent,
        LandingComponent
       ],
      imports: [
        FormsModule,
        MaterialModule,
        AppRoutingModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
