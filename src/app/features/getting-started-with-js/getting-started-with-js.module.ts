import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GettingStartedWithJsRoutingModule } from './getting-started-with-js-routing.module';
import { GettingStartedWithJsComponent } from './getting-started-with-js.component';

@NgModule({
  declarations: [GettingStartedWithJsComponent],
  imports: [CommonModule, GettingStartedWithJsRoutingModule],
})
export class GettingStartedWithJsModule {}
