import { InjectionToken } from '@angular/core';

/**
 * Example Token
 * This file defines an example token that can be used as a shared injection token
 * in your Angular application or library. Tokens are useful for dependency injection
 * and can help decouple implementations from their consumers.
 */


// Define an example token
export const EXAMPLE_TOKEN = new InjectionToken<string>('EXAMPLE_TOKEN', {
    providedIn: 'root',
    factory: () => 'Default Value',
});