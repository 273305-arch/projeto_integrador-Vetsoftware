import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio42 } from './exercicio4-2';

describe('Exercicio42', () => {
  let component: Exercicio42;
  let fixture: ComponentFixture<Exercicio42>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio42],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio42);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
