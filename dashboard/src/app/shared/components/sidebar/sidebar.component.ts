import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  account = this.accountService.accountValue;
  Account: Account;


  constructor(private accountService: AuthService) {
    this.accountService.account.subscribe(x => this.account = x);
  }

  ngOnInit(): void {
  }

}
