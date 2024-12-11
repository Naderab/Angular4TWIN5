import { inject, Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authentificationGuard: CanActivateFn = (route, state,auth = inject(AuthService),router=inject(Router)) => {
  if (auth._isLogged()) {
    return true;
  } else {
    router.navigate(['/login'])
    return false;
  }
};
