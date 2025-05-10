/**
 * A directive that highlights the background color of an element when the mouse hovers over it.
 * 
 * @description
 * This directive listens for `mouseenter` and `mouseleave` events on the host element.
 * When the mouse enters, it changes the background color to yellow.
 * When the mouse leaves, it removes the background color.
 * 
 * @usage
 * Add the `appExample` directive to any HTML element:
 * ```html
 * <div appExample></div>
 * ```
 */
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: 'appExample' // Usage: <div appExample></div>
})
export class ExampleDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {}

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string | null) {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}