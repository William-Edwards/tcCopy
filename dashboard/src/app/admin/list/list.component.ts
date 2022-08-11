import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Account } from 'src/app/models/account';
import { first } from 'rxjs';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  accounts: any[];
  account = this.accountService.accountValue;

  displayedColumns: string[] = ['firstName', 'email', 'role', 'tier', 'company'];

  constructor(
    private router: Router,
    private accountService: AuthService
  ) { }

  ngOnInit(): void {
    this.accountService.getAll()
      .pipe(first())
      .subscribe(accounts => this.accounts = accounts);

    console.log(this.account);
  }

  logout() {

    this.accountService.logout();
    this.router.navigate(['/auth/login']);
  }

  deleteAccount(id: string) {
    const account = this.accounts.find(x => x.id === id);
    account.isDeleting = true;
    this.accountService.delete(id)
      .pipe(first())
      .subscribe(() => {
        this.accounts = this.accounts.filter(x => x.id !== id)
      });
  }

}
