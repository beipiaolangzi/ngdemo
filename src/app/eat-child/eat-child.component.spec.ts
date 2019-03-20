import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EatChildComponent } from './eat-child.component';

describe('EatChildComponent', () => {
  let component: EatChildComponent;
  let fixture: ComponentFixture<EatChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EatChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
