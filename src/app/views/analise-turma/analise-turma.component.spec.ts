import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseTurmaComponent } from './analise-turma.component';

describe('AnaliseTurmaComponent', () => {
  let component: AnaliseTurmaComponent;
  let fixture: ComponentFixture<AnaliseTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaliseTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaliseTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
