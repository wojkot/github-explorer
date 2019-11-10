export interface IRepository {
  name: string;
  language: string;
  forks_count: number;
  open_issues_count: number;
  updated_at: string;
  stargazers_url: string;
  description?: string;
}
