import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  constructor() {}

  getMessage(): string {
    return 'Hello from ExampleService!';
  }
}