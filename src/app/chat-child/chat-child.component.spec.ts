import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatChildComponent } from './chat-child.component';

describe('ChatChildComponent', () => {
  let component: ChatChildComponent;
  let fixture: ComponentFixture<ChatChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
