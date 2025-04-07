import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail-drawer',
  imports: [CommonModule],
  templateUrl: './detail-drawer.component.html',
  styleUrls: ['./detail-drawer.component.scss'],
  standalone: true,
})
export class DetailDrawerComponent {
  @Input() data: any = {};
  @Input() visible: boolean = false;
  @Output() onClose = new EventEmitter<void>();
  fadeIn = false;

  ngOnChanges() {
    if (this.visible) {
      this.triggerFadeIn();
    }
  }

  triggerFadeIn() {
    this.fadeIn = false;
    setTimeout(() => {
      this.fadeIn = true;
    }, 0);
  }

  closeDrawer() {
    this.onClose.emit();
  }

  objectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  getLabel(key: string): string {
    const labels: Record<string, string> = {
      codigo: 'Código',
      emissao: 'Emissão',
      nomeCliente: 'Nome do Cliente',
      formaPagamento: 'Forma de Pagamento',
      vendedor: 'Vendedor',
      valorTotal: 'Valor Total',
    };
    return labels[key] || key;
  }
}
