import { Component } from '@angular/core';

import { GithubService } from '../../services/github.service';

@Component({
  moduleId: 'module.id',
  selector: 'github',
  templateUrl: 'github.component.html',
  styleUrls: ['github.component.scss']
})
export class GithubComponent {
  user: any;
  repos: any;
  username: string = '';

  constructor(private _githubService: GithubService) {
    console.log('service is injected...');
  }

  search(username) {
    this._githubService.updateUsername(this.username);

    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });
    this._githubService.getRepo().subscribe(repos => {
      this.repos = repos;
    });
  }

}
