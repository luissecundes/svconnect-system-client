import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Output() insert = new EventEmitter<void>();

  onInsert() {
    this.insert.emit();
  }

  onEdit() {
    console.log('Editar clicado');
  }

  onOption1() {
    console.log('Opção 1 clicada');
  }

  onOption2() {
    console.log('Opção 2 clicada');
  }

  onOption3() {
    console.log('Opção 3 clicada');
  }
}
