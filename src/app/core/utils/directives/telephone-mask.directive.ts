import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTelefoneMask]',
  standalone: true,
})
export class TelefoneMaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput() {
    let value = this.el.nativeElement.value.replace(/\D/g, '');

    if (value.length <= 10) {
      value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
      value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }

    this.el.nativeElement.value = value;
  }
}
