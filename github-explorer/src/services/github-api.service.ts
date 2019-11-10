import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService extends HttpService {

  constructor(protected http: HttpClient) {
    super(http)
   }

  requestUsersRepoData(userName: string) {
    return super.getRequest(`https://api.github.com/users/${userName}/repos`);
  }

  requestReposBranchesData(userName: string, repoName: string) {
    return super.getRequest(`https://api.github.com/repos/${userName}/${repoName}/branches`);
  }

  requestReposCommentsData(userName: string, repoName: string) {
    return super.getRequest(`https://api.github.com/repos/${userName}/${repoName}/comments`);
  }
}