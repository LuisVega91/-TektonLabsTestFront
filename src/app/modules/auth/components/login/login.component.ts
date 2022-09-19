import { ModalService } from './../../../../common/modules/modal/services/modal.service';
import { REG_EXP } from '../../../../common/constants/regular-expressions.const';
import { Router } from '@angular/router';

import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.maxLength(255),
        Validators.pattern(REG_EXP.email),
      ],
    ],
    password: ['', [Validators.required, Validators.maxLength(255)]],
  });

  get isInvalidEmail() {
    return this.form.get('email')?.invalid;
  }

  get errorMessageEmail() {
    if (!!this.form.get('email')?.errors?.['pattern']) {
      return 'must be an email';
    } else if (!!this.form.get('email')?.errors?.['required']) {
      return 'it is required';
    } else {
      return 'invalid';
    }
  }

  get isInvalidPassword() {
    return this.form.get('password')?.invalid;
  }

  get errorMessagePassword() {
    if (!!this.form.get('password')?.errors?.['required']) {
      return 'it is required';
    } else {
      return 'invalid';
    }
  }

  onLogin() {
    this.authService.login(this.form.value).subscribe({
      next: (resp) => {
        this.modalService.openDoneModal(`Welcome ${resp.user.email}`);
      },
    });
  }

  constructor(
    private authService: AuthService,
    private modalService: ModalService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
}
