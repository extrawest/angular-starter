import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, PasswordModule, ButtonModule],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isSaving: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  // TODO: use rxjs here
  onSubmit(): void {
    this.isSaving = true;

    setTimeout(() => {
      console.log(this.form.getRawValue());
      this.isSaving = false;
    }, 2_000);
  }
}
