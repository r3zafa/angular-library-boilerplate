import { ModelSignal } from "@angular/core";

/**
 * Creates a model signal that can be used to manage reactive state in Angular applications.
 * The model signal provides a way to store a value and optionally configure delay options for updates.
 *
 * @template T - The type of the model's value.
 * @param {T} [initialValue] - The initial value of the model. Defaults to `undefined` if not provided.
 * @param {DelayOptions} [opts] - Optional configuration for delay options.
 * @returns {ModelSignal<T>} A model signal containing the value and options.
 *
 * @example
 * // Create a model signal with an initial value
 * const myModel = model<number>(42);
 * console.log(myModel.value); // Output: 42
 *
 * // Create a model signal with delay options
 * const delayedModel = model<string>('Hello', { delay: 500 });
 * console.log(delayedModel.options); // Output: { delay: 500 }
 *
 * // Usage in a component to manage reactive state
 * @Component({
 *   selector: 'app-example',
 *   template: `
 *     <div>
 *       <p>Value: {{ myModel.value }}</p>
 *       <button (click)="updateValue()">Update Value</button>
 *     </div>
 *   `
 * })
 * export class ExampleComponent {
 *   myModel = model<number>(42);
 *
 *   updateValue() {
 *     this.myModel.value = 100; // Update the reactive state
 *   }
 * }
 */
export function model<T>(initialValue?: T, opts?: DelayOptions): ModelSignal<T> {
	// Provide a basic implementation for the function
	return {
		value: initialValue,
		options: opts
	} as unknown as ModelSignal<T>;
}