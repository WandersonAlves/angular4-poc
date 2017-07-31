import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemContainerComponent } from './mensagem-container.component';

describe('MensagemContainerComponent', () => {
  let component: MensagemContainerComponent;
  let fixture: ComponentFixture<MensagemContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagemContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
