import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private router: Router,
    private accountService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout() {

    this.accountService.logout();
    this.router.navigate(['/auth/login']);
  }

}
