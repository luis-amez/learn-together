import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotLoggedGuard implements CanActivate {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): Promise<any> {
    return this.authService.me()
      .then((user) => {
        if (!user) {
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
}
}
