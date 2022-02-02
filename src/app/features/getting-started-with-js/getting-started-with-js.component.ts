import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import Reveal from 'reveal.js';
import { Slides } from './slides';

@Component({
  selector: 'app-getting-started-with-js',
  templateUrl: './getting-started-with-js.component.html',
  styleUrls: ['./getting-started-with-js.component.scss'],
})
export class GettingStartedWithJsComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  constructor() {}

  ngOnInit(): void {
    console.dir(Slides);
  }
  ngAfterViewInit(): void {
    if (true) {
      Reveal.initialize({
        parallaxBackgroundImage: '',
        parallaxBackgroundSize: '',
        parallaxBackgroundHorizontal: 200,
        parallaxBackgroundVertical: 50,
      });
      console.dir(Reveal.getIndices());
    }
  }
  ngOnDestroy(): void {
    console.dir(Reveal.getIndices());
  }
}
