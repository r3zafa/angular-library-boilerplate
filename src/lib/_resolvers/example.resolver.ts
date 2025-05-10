import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

/**
 * ExampleResolver is a route resolver that fetches data before navigating to a route.
 * It ensures that the required data is available when the route is activated.
 */
@Injectable({
    providedIn: 'root',
})
export class ExampleResolver implements Resolve<any> {
    constructor() {}

    /**
     * Resolves the required data for the route.
     * Replace the logic here with actual data fetching from a service or API.
     * 
     * @returns {Observable<any>} An observable containing the resolved data.
     */
    resolve(): Observable<any> {
        // Replace with your actual data fetching logic
        return of({ exampleData: 'This is example data' });
    }
}