import { ModalService } from './../../../../common/modules/modal/services/modal.service';
import {
  UserRolesAsArray,
  UserRolesAsArrayType,
} from './../../../../common/constants/roles';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { REG_EXP } from '../../../../common/constants/regular-expressions.const';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IsValidRole } from 'src/app/common/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
    role: [null, [Validators.required, IsValidRole]],
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

  get isInvalidRole() {
    return this.form.get('role')?.invalid;
  }

  get errorMessageRole() {
    if (!!this.form.get('role')?.errors?.['invalidRole']) {
      return 'must be a valid role';
    } else if (!!this.form.get('role')?.errors?.['required']) {
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

  public roles: UserRolesAsArrayType = UserRolesAsArray;

  onRegister() {
    this.authService.register(this.form.value).subscribe({
      next: (resp) => {
        this.modalService.openDoneModal(
          `Welcome ${resp.email} your account type ${resp.role} was created successfully`,
          () => {
            this.router.navigate(['/auth/login']);
          }
        );
      },
    });
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}
}
