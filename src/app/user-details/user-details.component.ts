import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public user: User;
  constructor(private router: Router) { }

  ngOnInit() {
    this.user = history.state;
  }

  public backToUserList() {
    this.router.navigate(['user-list']);
  }

}
