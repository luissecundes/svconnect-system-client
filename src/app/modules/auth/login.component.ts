import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  company: string = '';
  branch: string = '';
  module: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    console.log('Login submitted', {
      username: this.username,
      password: this.password,
      company: this.company,
      branch: this.branch,
      module: this.module,
    });

    this.router.navigate(['/home']);
  }
}
