import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BranchItemComponent } from './branch-item.component';
import { MaterialModule } from 'src/app/common/material.module';
import { IBranch } from 'src/app/models/branch.model';
import { By } from '@angular/platform-browser';

describe('BranchItemComponent', () => {
  let component: BranchItemComponent;
  let fixture: ComponentFixture<BranchItemComponent>;

  const branchesDataMock: IBranch[] = [{ name: 'testBranch' }];

  const selectors = {
    listItem: 'mat-list-item'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BranchItemComponent],
      imports: [MaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display branches', () => {
    component.branchesData = branchesDataMock;
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css(selectors.listItem)).nativeElement
        .textContent
    ).toEqual('testBranch');
  });
});
