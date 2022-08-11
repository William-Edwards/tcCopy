import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from 'src/app/auth/auth.service';
import { MustMatch } from 'src/app/auth/must-match.validator';

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
      title: ['', Validators.required],
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
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createAccount();
    } else {
      console.log('hello')
      this.updateAccount();
    }
  }

  private createAccount() {
    this.accountService.create(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          // alert service
          this.router.navigate(['/admin']);
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
          this.router.navigate(['/admin']);
        },
        error: error => {
          // alert service
          this.loading = false;
        }
      });
  }

}
