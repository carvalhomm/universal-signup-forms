import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../models/User.interface";

@Injectable({providedIn: 'root'})
export class UserService implements OnDestroy {
    private users: User[] = null;
    private usersObservable = new BehaviorSubject<User[]>(this.users);
    get usersBehavior(): Observable<User[]> {
        return this.usersObservable;
    }
    constructor(private httpClient: HttpClient) {
        this.getUsersMock();
    }

    ngOnDestroy() {
        this.usersObservable.complete();
    }

    private getUsersMock() {
        this.httpClient.get('http://5ccc5842f47db800140110d0.mockapi.io/users').toPromise().then((users: User[]) => {
            this.users = users;
            this.usersObservable.next(this.users);
        }).catch(err => console.log('error getting users mock --> ', err));
    }

    public insertNewUser(type: string, sharedForm: any, specificForm: any) {
        this.users.unshift({type, ...sharedForm, ...specificForm});
        this.usersObservable.next(this.users);
    }
}
