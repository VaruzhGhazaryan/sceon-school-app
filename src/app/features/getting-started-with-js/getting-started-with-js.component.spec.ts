import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartedWithJsComponent } from './getting-started-with-js.component';

describe('GettingStartedWithJsComponent', () => {
  let component: GettingStartedWithJsComponent;
  let fixture: ComponentFixture<GettingStartedWithJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettingStartedWithJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedWithJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
