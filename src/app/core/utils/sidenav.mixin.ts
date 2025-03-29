import { Directive } from '@angular/core';

@Directive()
export abstract class SidenavBaseComponent {
  sidenavCollapsed = false;

  handleSidenavToggle(event: { collapsed: boolean; screenWidth: number }) {
    this.sidenavCollapsed = event.collapsed;
  }
}
