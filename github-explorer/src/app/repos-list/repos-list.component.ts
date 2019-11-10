import { Component, OnInit } from '@angular/core';
import { GithubApiService } from 'src/services/github-api.service';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit {

  reposData;

  constructor(private githubApiService: GithubApiService) { }

  ngOnInit() {
    console.warn(';;;;;;;;;;;;')
    this.githubApiService.getOwnerName().subscribe(async (ownerName) => {
      this.reposData = await this.githubApiService.requestUsersRepoData(ownerName).toPromise();
      console.warn(this.reposData)
    })
  }

}
