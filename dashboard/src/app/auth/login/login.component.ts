import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { first } from 'rxjs';
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
    private authService: AuthService
    // private alertService: 
  ) {
    // // redirect to home if logged in needed
    // if (this.authService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }

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

    // alarm service add in

    // stops here if form invalid
    if (this.loginForm.invalid) {
      return;
    }


    this.loading = true;
    this.authService.login(this.f.email.value, this.f.password.value)
      .pipe(first()).subscribe({
        next: () => {
          // get return url from query params or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          // alarm service here
          this.loading = false;
        }

      });

  }

}