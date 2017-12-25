import {ValidatorFn, AbstractControl} from "@angular/forms";

export function LbtPhoneValidator(): ValidatorFn {

  return (c: AbstractControl): {[key: string]: any} => {

    const phoneEmpty: boolean = c.value == '';

    const phoneValid = ( !phoneEmpty );

    return !phoneValid ? {valid: false} : null;

  };

}


