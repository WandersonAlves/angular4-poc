import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseDisciplinaComponent } from './analise-disciplina.component';

describe('AnaliseDisciplinaComponent', () => {
  let component: AnaliseDisciplinaComponent;
  let fixture: ComponentFixture<AnaliseDisciplinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaliseDisciplinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaliseDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
