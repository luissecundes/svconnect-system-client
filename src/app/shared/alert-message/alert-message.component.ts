import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-alert-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss'],
})
export class AlertMessageComponent implements OnInit {
  message = '';
  type: 'success' | 'error' | 'info' | 'warning' = 'success';
  internalVisible = false;
  animationClass = '';
  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.getAlertState().subscribe((alertState) => {
      if (alertState) {
        this.message = alertState.message;
        this.type = alertState.type;
        this.internalVisible = true;
        this.animationClass = 'enter';
      } else {
        this.internalVisible = false;
      }
    });
  }

  show({
    message = '',
    type = 'success',
  }: {
    message?: string;
    type?: 'success' | 'error' | 'info' | 'warning';
  }) {
    this.message = message || this.getDefaultMessage(type);
    this.type = type;
    this.internalVisible = true;
    this.animationClass = 'enter';

    setTimeout(() => {
      this.animationClass = 'leave';
    }, 3000);
  }

  onAnimationEnd(): void {
    if (this.animationClass === 'leave') {
      this.internalVisible = false;
      this.animationClass = '';
    }
  }

  private getDefaultMessage(type: string): string {
    switch (type) {
      case 'success':
        return 'Registro salvo com sucesso!';
      case 'error':
        return 'Ocorreu um erro ao processar sua solicitação.';
      case 'warning':
        return 'Atenção! Verifique os dados informados.';
      case 'info':
        return 'Informação importante.';
      default:
        return '';
    }
  }
}
