import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from '../models/User.interface';
import { UserService } from '../services/user.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public loading = true;
  public title = 'groweriq-signup';
  public userData = new MatTableDataSource<User>();
  public visibleColumns = ['name', 'email', 'type'];
  private onDestroy = new Subject<void>();
  constructor(private dialog: MatDialog, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.listenToUsersChange();
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  public listenToUsersChange() {
    this.userService.usersBehavior.pipe(takeUntil(this.onDestroy)).subscribe((users: User[]) => {
      this.loading = false;
      this.userData.data = users;
    });
  }


  public openSignUpModal() {
    this.dialog.open(SignupComponent, {
      panelClass: 'material-design-full-scroll-modal'
    });
  }

  public openUserDetails(user: User) {
    this.router.navigate(['user-details'], {state: user});
  }

}
