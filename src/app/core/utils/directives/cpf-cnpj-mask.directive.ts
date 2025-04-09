import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCpfCnpjMask]',
  standalone: true,
})
export class CpfCnpjMaskDirective {
  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    const cursorPosition = this.el.selectionStart || 0;
    let rawValue = this.el.value.replace(/\D/g, '');

    if (rawValue.length > 14) {
      rawValue = rawValue.slice(0, 14);
    }

    let maskedValue = '';

    if (rawValue.length <= 11) {
      // CPF: 000.000.000-00
      maskedValue = rawValue.replace(
        /(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/,
        (match, p1, p2, p3, p4) => {
          return [
            p1,
            p2 ? '.' + p2 : '',
            p3 ? '.' + p3 : '',
            p4 ? '-' + p4 : '',
          ].join('');
        }
      );
    } else {
      // CNPJ: 00.000.000/0000-00
      maskedValue = rawValue.replace(
        /(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/,
        (match, p1, p2, p3, p4, p5) => {
          return [
            p1,
            p2 ? '.' + p2 : '',
            p3 ? '.' + p3 : '',
            p4 ? '/' + p4 : '',
            p5 ? '-' + p5 : '',
          ].join('');
        }
      );
    }

    this.el.value = maskedValue;

    setTimeout(() => {
      this.el.setSelectionRange(this.el.value.length, this.el.value.length);
    });
  }
}
