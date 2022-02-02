import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LessonsComponent } from './lessons/lessons.component';

const routes: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: LessonsComponent,
      },
      {
        path: 'getting-started-with-js',
        loadChildren: () =>
          import('./features/getting-started-with-js').then(
            (m) => m.GettingStartedWithJsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
