import { Component, Input } from '@angular/core';
import { TestInterface } from './test.service';

@Component({
  selector: 'app-root',
  template: '<h1>hello world</h1>',
})
export class AppComponent {
  @Input() test: TestInterface;
}
