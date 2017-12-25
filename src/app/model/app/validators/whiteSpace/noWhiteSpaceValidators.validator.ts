import { AbstractControl, ValidatorFn } from '@angular/forms';

export function NoWhitespaceValidator(): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any } => {

    let isWhitespace = (control.value != null) ? (control.value.trim().length == 0) : false;

    return isWhitespace ? {valid: false} : null;

  };

}

