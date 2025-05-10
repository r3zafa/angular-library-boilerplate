import { Pipe, PipeTransform } from '@angular/core';

/**
 * ExamplePipe
 * This pipe is a boilerplate example for transforming input values.
 * Replace the logic inside the `transform` method with your desired transformation.
 */
@Pipe({
    name: 'example'
})
export class ExamplePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        // Add your transformation logic here
        return value;
    }
}