import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  // private auth: any;
  // private user: any;

  // constructor(
  //   private http: HttpClient,
  //   private router: Router,
  //   private navgatiionService: FuseNavigationService
  // ) {}

  // public setAuth(auth) {
  //   this.auth = auth;
  // }

  // public setUser(user) {
  //   this.user = user;
  //   this.storeUserDetails();
  // }

  // /**
  //  * @param username
  //  * @param password
  //  */
  // public login(username: string, password: string) {
  //   return this.http
  //     .post<User>(`${environment.apiUrl}/oauth/token`, {
  //       grant_type: 'password',
  //       client_id: environment.apiOauthClientId,
  //       client_secret: environment.apiOauthClientSecret,
  //       username: username,
  //       password: password,
  //       scope: '*',
  //     })
  //     .map((user: User) => {
  //       if (user && user.access_token) {
  //         this.auth = user;

  //         // TODO calculate token expiration date
  //         this.storeUserDetails();
  //       }

  //       return user;
  //     });
  // }

  // /**
  //  * Remove user from local storage to log user out
  //  */
  // public logout(): void {
  //   localStorage.removeItem('currentUser');
  //   this.router.navigate(['login']);
  //   location.reload();
  //   this.navgatiionService.unregister('main');
  // }

  // /**
  //  * Check if user exists
  //  */
  public isAuthenticated(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  // /**
  //  * @return string with current token_type and access_token
  //  */
  // public getAuthentication() {
  //   if (!this.isAuthenticated()) {
  //     this.logout();
  //   }

  //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   return `${currentUser.auth.token_type} ${currentUser.auth.access_token}`;
  // }

  // public getUser() {
  //   if (this.isAuthenticated()) {
  //     const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  //     return currentUser.user;
  //   }
  //   return 'User';
  // }

  // /**
  //  * Store user details and jwt token in local storage
  //  */
  // private storeUserDetails(): void {
  //   localStorage.setItem(
  //     'currentUser',
  //     JSON.stringify({
  //       auth: this.auth,
  //       user: this.user,
  //     })
  //   );
  // }

  // /**
  //  * Get Authenticated user information
  //  *
  //  */
  // public currentUserInformation() {
  //   return this.http
  //     .get(`${environment.apiUrl}/v1/users/authenticated-user`, this.options())
  //     .map((user: any) => user.data);
  // }

  // /**
  //  * Build request options
  //  *
  //  * @param body
  //  */
  // private options(body: any = {}): any {
  //   return {
  //     headers: this.header(),
  //     body: body,
  //   };
  // }

  // /**
  //  * Generate authenticated request headers
  //  *
  //  */
  // private header(): HttpHeaders {
  //   return new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: this.getAuthentication(),
  //   });
  // }
  // public isExternal(): boolean {
  //   if (!this.isAuthenticated()) {
  //     return false;
  //   }
  //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  //   if (!currentUser.user) {
  //     return false;
  //   }
  //   const role = currentUser.user.role;
  //   return (
  //     role.name === 'client-ext-not-system' ||
  //     role.name === 'client-ext-house' ||
  //     role.name === 'create-ordem' ||
  //     role.name === 'financial-conference'
  //   );
  // }

  // public isFinanceExternal(): boolean {
  //   if (!this.isAuthenticated()) {
  //     return false;
  //   }
  //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  //   if (!currentUser.user) {
  //     return false;
  //   }
  //   const role = currentUser.user.role;
  //   return role.name === 'financial-conference';
  // }

  // public isCreateOrderOnly() {
  //   if (!this.isAuthenticated()) {
  //     return false;
  //   }
  //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  //   if (!currentUser.user) {
  //     return false;
  //   }
  //   const role = currentUser.user.role;
  //   return role.name === 'create-ordem';
  // }
  // public hasPermission(permission: string) {
  //   if (!this.isAuthenticated()) {
  //     return false;
  //   }

  //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  //   if (!currentUser.user) {
  //     return false;
  //   }

  //   const role = currentUser.user.role;

  //   if (!role) {
  //     return false;
  //   }
  //   let isShowAny = true;
  //   const excludedRoles = [9];
  //   if (role.admin) {
  //     return true;
  //   } else {
  //     if (role.name !== 'client-ext-house') {
  //       if (
  //         permission !== 'order-service' &&
  //         permission !== 'fines-index' &&
  //         permission !== 'warehouse-integration-index'
  //       ) {
  //         isShowAny = false;
  //       }
  //     }
  //   }

  //   let result = false;
  //   role.permissions.forEach((item) => {
  //     if (item.name == permission) {
  //       result = true;
  //     }
  //     return;
  //   });

  //   return result && isShowAny;
  // }
}
