import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';
import { Role } from 'src/app/models/roles';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  account = this.accountService.accountValue;


  constructor(private accountService: AuthService) {
  }

  ngOnInit(): void {
  }

}
