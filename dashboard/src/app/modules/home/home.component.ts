import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Account } from 'src/app/models/account';
import { Tier } from 'src/app/models/tiers';
import { Role } from 'src/app/models/roles'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  account: Account;
  Tier: Tier;
  Role: Role;

  constructor(private accountService: AuthService) {
    this.accountService.account.subscribe(x => this.account = x);
  }

  ngOnInit(): void {
  }

}
