import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    InputSwitchModule,
    TranslateModule,
  ],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isSaving: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl<string>('', [Validators.required]),
      lastName: new FormControl<string>('', [Validators.required]),
      login: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [Validators.required]),
      isTermsAndCondition: new FormControl<boolean>(false, [
        Validators.requiredTrue,
      ]),
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
