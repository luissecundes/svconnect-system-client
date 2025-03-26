import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  onInsert() {
    console.log('Inserir clicado');
    // Lógica para inserção
  }

  onEdit() {
    console.log('Editar clicado');
    // Lógica para edição
  }

  onOption1() {
    console.log('Opção 1 clicada');
    // Lógica para a opção 1
  }

  onOption2() {
    console.log('Opção 2 clicada');
    // Lógica para a opção 2
  }

  onOption3() {
    console.log('Opção 3 clicada');
    // Lógica para a opção 3
  }
}
