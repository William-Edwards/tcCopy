import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { first } from 'rxjs';
import { AlertService } from 'src/app/alerts/alert.service';
import { Role } from 'src/app/models/roles';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
  ) {
    // redirect to home if logged in needed
    if (this.authService.accountValue) {
      this.router.navigate(['/']);
    }

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  // getter for form fields needs checking
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    this.alertService.clear();

    // stops here if form invalid
    if (this.loginForm.invalid) {
      return;
    }


    this.loading = true;
    this.authService.login(this.f.email.value, this.f.password.value)
      .pipe(first()).subscribe(
        data => {
          // get return url from query params or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          // this.router.navigateByUrl(returnUrl);
          this.redirectAccount(data.role);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });

  }

  redirectAccount(userRole) {
    if (userRole == Role.User) {
      this.router.navigate(['/']);
    } else if (userRole == Role.Admin) {
      this.router.navigate(['/admin']);
    }
  }

}