import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, PasswordModule, ButtonModule, TranslateModule],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isSaving: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    // TODO: just a dummy implementation
    this.isSaving = true;

    setTimeout(() => {
      console.log(this.form.getRawValue());
      this.isSaving = false;

      this.router.navigate(['dashboard']);
    }, 2_000);
  }
}
