import {Directive, ElementRef, AfterViewInit} from '@angular/core';

@Directive({
  selector: '.focus'
})
export class AutofocusDirective implements AfterViewInit {

  constructor(private eltRef: ElementRef) {

  }

  ngAfterViewInit(){
    this.eltRef.nativeElement.focus();
  }

}
