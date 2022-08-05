import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthService } from '../auth.service';

enum EmailStatus {
  Verifying,
  Failed
}

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  EmailStatus = EmailStatus;
  emailStatus = EmailStatus.Verifying

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AuthService,
    // alert service
  ) { }

  ngOnInit(): void {
    const token = this.route.snapshot.queryParams['token'];

    // remove token from url to prevent leakage
    this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

    this.accountService.verifyEmail(token)
      .pipe(first())
      .subscribe({
        next: () => {
          // alert service 
          this.router.navigate(['/auth/login']);
        },
        error: () => {
          this.emailStatus = EmailStatus.Failed;
        }
      });
  }
}
