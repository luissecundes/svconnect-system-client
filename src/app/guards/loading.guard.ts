import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class LoadingGuard {
  constructor(private spinner: NgxSpinnerService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.spinner.show();
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.spinner.hide();
        }, 3000);
      } else if (event instanceof NavigationError) {
        this.spinner.hide();
      } else if (event instanceof NavigationCancel) {
        setTimeout(() => {
          this.spinner.hide();
        }, 3000);
      }
    });
  }

  canActivate() {
    return true;
  }
}
