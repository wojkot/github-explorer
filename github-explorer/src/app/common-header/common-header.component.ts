import { Component, OnInit } from '@angular/core';
import { GithubApiService } from 'src/services/github-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss']
})
export class CommonHeaderComponent implements OnInit {

  userName = '';

  constructor(
    private router: Router,
    ) { }

  ngOnInit() {
  }

  searchRepos() {
    if(this.userName) {
      this.router.navigate([this.userName]);
    }
  }
}
