import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GettingStartedWithJsComponent } from './getting-started-with-js.component';

const routes: Routes = [
  {
    path: '',
    component: GettingStartedWithJsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GettingStartedWithJsRoutingModule {}
