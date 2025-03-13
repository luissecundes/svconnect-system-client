import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.guard';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(public auth: AuthenticationService, public router: Router) { }

    public canActivate(): boolean {

        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
