import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-branch-item',
  templateUrl: './branch-item.component.html',
  styleUrls: ['./branch-item.component.sass']
})
export class BranchItemComponent implements OnInit {

  @Input() branchesData;

  constructor() { }

  ngOnInit() {
  }

}
