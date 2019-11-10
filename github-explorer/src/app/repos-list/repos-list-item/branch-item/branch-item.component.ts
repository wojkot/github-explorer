import { Component, OnInit, Input } from '@angular/core';
import { IBranch } from 'src/app/models/branch.model';

@Component({
  selector: 'app-branch-item',
  templateUrl: './branch-item.component.html',
  styleUrls: ['./branch-item.component.scss']
})
export class BranchItemComponent implements OnInit {

  @Input() branchesData: IBranch[];

  constructor() { }

  ngOnInit() {
  }

}
