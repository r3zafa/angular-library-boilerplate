import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

/**
 * @description A guard that determines whether a route can be activated.
 * This guard is provided in the root injector and can be used to implement
 * custom logic for route activation.
 */
@Injectable({
  providedIn: 'root',
})
export class ExampleGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true; // Replace with your guard logic
  }
}