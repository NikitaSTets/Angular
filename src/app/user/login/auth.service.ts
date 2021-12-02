import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Data } from "@angular/router";
import { of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {

    currentUser!: IUser

    constructor(private http: HttpClient) {

    }

    loginUser(userName: string, password: string) {
        let loginInfo = {
            username: userName,
            password: password
        };
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }

        return this.http.post('/api/login', loginInfo, options)
            .pipe(tap(data => {
                this.currentUser = data as IUser;//???????????
            }))
            .pipe(catchError(err => {
                return of(false)
            }));
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firtstName: string, lastName: string) {
        this.currentUser.firstName = firtstName;
        this.currentUser.lastName = lastName;
    }

    checkAuthenticationStatus() {
        this.http.get('/api/currentIdentity')
            .pipe(tap(data => {
                if (data instanceof Object) {
                    this.currentUser = data as IUser;
                }
            }))
            .subscribe();
    }
}