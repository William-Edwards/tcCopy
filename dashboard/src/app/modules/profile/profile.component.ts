import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from 'src/app/auth/auth.service';
import { MustMatch } from 'src/app/auth/must-match.validator';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  account = this.accountService.accountValue
  form: FormGroup;
  loading = false;
  submitted = false;
  deleting = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AuthService,
    // alert service
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: [this.account.firstName, Validators.required],
      lastName: [this.account.lastName, Validators.required],
      email: [this.account.email, [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6)]],
      confirmPassword: ['']
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // alert service

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.update(this.account.id, this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          // alert service
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        error: error => {
          // alert service
          this.loading = false;
        }
      });
  }



}
