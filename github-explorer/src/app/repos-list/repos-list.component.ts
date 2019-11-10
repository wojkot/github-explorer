import { Component, OnInit } from '@angular/core';
import { GithubApiService } from 'src/services/github-api.service';
import { ActivatedRoute } from '@angular/router';
import { IRepository } from '../models/repository.model';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit {

  reposData: IRepository[];
  userName: string;

  constructor(
    private githubApiService: GithubApiService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.userName = params.username;
      this.reposData = await this.githubApiService.requestUsersRepoData(this.userName) as IRepository[];
    });
  }

}
