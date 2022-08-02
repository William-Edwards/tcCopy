import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';

import { Account, User } from '../models/account';
import { ThisReceiver, Token } from '@angular/compiler';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accountSubject: BehaviorSubject<Account>;
  public account: Observable<Account>;
  private API_URL = environment.apiUrl

  constructor(
    private router: Router,
    private http: HttpClient) {
    this.accountSubject = new BehaviorSubject<Account>(null);
    this.account = this.accountSubject.asObservable();

  }

  public get accountValue(): Account {
    return this.accountSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(this.API_URL + '/accounts/authenticate', { email, password }, { withCredentials: true })
      .pipe(map(account => {
        this.accountSubject.next(account);
        this.startRefreshTokenTimer();
        return account;
      }));

  }

  logout() {
    this.http.post<any>(this.API_URL + '/accounts/revoke-token', {}, { withCredentials: true }).subscribe();
    this.stopRefreshTokenTimer();
    this.accountSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  refreshToken() {
    this.http.post<any>
  }


  register(user: User) {
    return this.http.post(this.API_URL + '/users/register', user);
  }
}
