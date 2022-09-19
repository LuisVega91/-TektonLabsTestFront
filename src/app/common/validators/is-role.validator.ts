import { UserRoles } from '../constants/roles';
import { AbstractControl } from '@angular/forms';

export function IsValidRole(control: AbstractControl) {
  if (!Object.values(UserRoles).includes(control.value)) {
    return { invalidRole: true };
  }
  return null;
}
