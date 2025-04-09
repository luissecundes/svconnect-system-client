import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCpfCnpjMask]',
  standalone: true,
})
export class CpfCnpjMaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput() {
    let value = this.el.nativeElement.value.replace(/\D/g, '');

    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
    } else {
      value = value.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/,
        '$1.$2.$3/$4-$5'
      );
    }

    this.el.nativeElement.value = value;
  }
}
