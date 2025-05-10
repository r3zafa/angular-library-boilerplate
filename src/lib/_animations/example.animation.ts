import { trigger, state, style, transition, animate } from '@angular/animations';

// Example example.animation.ts
// This file contains a boilerplate Angular animation example.


export const exampleAnimation = trigger('exampleAnimation', [
    state('open', style({
        opacity: 1,
        transform: 'translateY(0)'
    })),
    state('closed', style({
        opacity: 0,
        transform: 'translateY(-100%)'
    })),
    transition('open <=> closed', [
        animate('300ms ease-in-out')
    ])
]);