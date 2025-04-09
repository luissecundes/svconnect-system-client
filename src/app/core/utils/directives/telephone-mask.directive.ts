import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTelefoneMask]',
  standalone: true,
})
export class TelefoneMaskDirective {
  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    const cursorPosition = this.el.selectionStart || 0;
    let rawValue = this.el.value.replace(/\D/g, '');

    // limitação a 11 dígitos (ex: 11987654321)
    if (rawValue.length > 11) {
      rawValue = rawValue.slice(0, 11);
    }

    let maskedValue = '';

    if (rawValue.length <= 10) {
      // formato fixo: (99) 9999-9999
      maskedValue = rawValue.replace(
        /(\d{0,2})(\d{0,4})(\d{0,4})/,
        (match, p1, p2, p3) =>
          `${p1 ? '(' + p1 : ''}${p1 && p1.length === 2 ? ')' : ''}${
            p2 ? ' ' + p2 : ''
          }${p3 ? '-' + p3 : ''}`
      );
    } else {
      // Formato celular: (99) 99999-9999
      maskedValue = rawValue.replace(
        /(\d{0,2})(\d{0,5})(\d{0,4})/,
        (match, p1, p2, p3) =>
          `${p1 ? '(' + p1 : ''}${p1 && p1.length === 2 ? ')' : ''}${
            p2 ? ' ' + p2 : ''
          }${p3 ? '-' + p3 : ''}`
      );
    }

    this.el.value = maskedValue;

    setTimeout(() => {
      this.el.setSelectionRange(this.el.value.length, this.el.value.length);
    });
  }
}
