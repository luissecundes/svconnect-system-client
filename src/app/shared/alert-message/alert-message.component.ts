import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss'],
})
export class AlertMessageComponent implements OnChanges {
  @Input() message = '';
  @Input() type: 'success' | 'error' | 'info' | 'warning' = 'success';
  @Input() visible = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['type'] && !changes['message']?.currentValue) {
      switch (this.type) {
        case 'success':
          this.message = 'Registro salvo com sucesso!';
          break;
        case 'error':
          this.message = 'Ocorreu um erro ao processar sua solicitação.';
          break;
        case 'warning':
          this.message = 'Atenção! Verifique os dados informados.';
          break;
        case 'info':
          this.message = 'Informação importante.';
          break;
      }
    }
  }
}
