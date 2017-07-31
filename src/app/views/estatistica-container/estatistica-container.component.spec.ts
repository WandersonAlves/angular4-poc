import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatisticaContainerComponent } from './estatistica-container.component';

describe('EstatisticaContainerComponent', () => {
  let component: EstatisticaContainerComponent;
  let fixture: ComponentFixture<EstatisticaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatisticaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatisticaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
