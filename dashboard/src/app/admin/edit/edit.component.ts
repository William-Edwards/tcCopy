import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from 'src/app/auth/auth.service';
import { MustMatch } from 'src/app/auth/must-match.validator';

interface Role {
  value: string;
  viewValue: string;
}

interface Tier {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  form: FormGroup;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  roles: Role[] = [
    { value: 'Admin', viewValue: 'Admin' },
    { value: 'User', viewValue: 'User' }
  ];

  tiers: Tier[] = [
    { value: 'Bronze', viewValue: 'Bronze' },
    { value: 'Silver', viewValue: 'Silver' },
    { value: 'Gold', viewValue: 'Gold' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AuthService
    // alert service
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      tier: ['', Validators.required],
      company: ['', Validators.required],
      password: ['', [Validators.minLength(6), this.isAddMode ? Validators.required : Validators.nullValidator]],
      confirmPassword: ['']
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });


    if (!this.isAddMode) {
      this.accountService.getById(this.id)
        .pipe(first())
        .subscribe(x => this.form.patchValue(x));
    }
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    //alert service

    // stop here if form is invalid
    if (this.form.invalid) {
      console.log('hello')
      console.log(this.form)
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createAccount();
    } else {
      this.updateAccount();
    }
  }

  private createAccount() {
    this.accountService.create(this.form.value)
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

  private updateAccount() {
    this.accountService.update(this.id, this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          // alert service
          this.router.navigate(['../../'], { relativeTo: this.route });
        },
        error: error => {
          // alert service
          this.loading = false;
        }
      });
  }

  deleteAccount() {
    this.accountService.delete(this.id)
      .pipe(first())
      .subscribe({
        next: () => {
          // alert service
          this.router.navigate(['../../'], { relativeTo: this.route });
        },
        error: error => {
          // alert service
          this.loading = false;
        }

      });
  }

}
