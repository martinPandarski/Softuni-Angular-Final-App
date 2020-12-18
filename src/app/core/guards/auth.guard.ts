import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/user/user.service';
import { IUser } from 'src/app/shared/interfaces/interfaces/user';
import {map,tap} from 'rxjs/operators'

@Injectable()
export class AuthGuard implements CanActivateChild {
  constructor(
    private userService: UserService,
    private router: Router
  ) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let stream$: Observable<IUser | null>;
    stream$ = of(this.userService.currentUser);

    return stream$.pipe(
      map((user: IUser | null) => {
        const isLoggedFromData = childRoute.data.isLogged;
        return typeof isLoggedFromData !== 'boolean' || isLoggedFromData === !!user;
      }),
      tap((canContinue) => {
        if (canContinue) { return; }
        this.router.navigate(['user/login']);
        return true;
      })
    );
  }
}
