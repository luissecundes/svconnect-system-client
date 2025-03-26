import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { MenuComponent } from '../../core/components/menu/menu.component';

@Component({
  selector: 'app-clientes',
  imports: [NavbarComponent, MenuComponent],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent {

}
