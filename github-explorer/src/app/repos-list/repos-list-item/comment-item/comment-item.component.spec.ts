import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentItemComponent } from './comment-item.component';
import { MaterialModule } from 'src/app/common/material.module';
import { IComment } from 'src/app/models/comment.model';
import { By } from '@angular/platform-browser';

describe('CommentItemComponent', () => {
  let component: CommentItemComponent;
  let fixture: ComponentFixture<CommentItemComponent>;

  const commentsDataMock = [
    {
      user: {
        login: 'test'
      },
      created_at: '2017-09-06T19:59:03Z',
      body: 'test'
    } as IComment
  ];

  const selectors = {
    cardTitle: 'mat-card-title',
    cardSubtitle: 'mat-card-subtitle',
    commentMessage: '.comment-message'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommentItemComponent],
      imports: [MaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display comment data', () => {
    component.commentsData = commentsDataMock;
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css(selectors.cardTitle)).nativeElement
        .textContent
    ).toEqual('test');
    expect(
      fixture.debugElement.query(By.css(selectors.cardSubtitle)).nativeElement
        .textContent
    ).toEqual('September 6th 2017, 9:59:03 pm');
    expect(
      fixture.debugElement.query(By.css(selectors.commentMessage)).nativeElement
        .textContent
    ).toEqual('test');
  });
});
