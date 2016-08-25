import { Component } from '@angular/core';

import { LifecycleComponent } from './lifecycle.component';

@Component({
  moduleId: module.id,
  selector: 'first-app-app',
  template: `
    <fa-databinding></fa-databinding>
  `
})
export class AppComponent {
    delete = false;
    test = 'Starting value';
    boundValue = 1000;
}
