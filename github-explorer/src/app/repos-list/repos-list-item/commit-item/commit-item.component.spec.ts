import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitItemComponent } from './commit-item.component';
import { MaterialModule } from 'src/app/common/material.module';
import { ICommit } from 'src/app/models/commit.model';
import { By } from '@angular/platform-browser';

describe('CommitItemComponent', () => {
  let component: CommitItemComponent;
  let fixture: ComponentFixture<CommitItemComponent>;

  const commitsData = [{
    commit: {
      author: {
        name: 'test',
        date: '2017-09-06T19:59:03Z'
      },
      message: 'test commit'
    },

  } as ICommit];

  const selectors = {
    cardTitle: 'mat-card-title',
    cardSubtitle: 'mat-card-subtitle',
    commitMessage: '.commit-message',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitItemComponent ],
      imports: [
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display commit data', () => {
    component.commitsData = commitsData;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css(selectors.cardTitle)).nativeElement.textContent).toEqual('test');
    expect(fixture.debugElement.query(By.css(selectors.cardSubtitle)).nativeElement.textContent).toEqual('September 6th 2017, 9:59:03 pm');
    expect(fixture.debugElement.query(By.css(selectors.commitMessage)).nativeElement.textContent).toEqual('test commit');
  });
});
