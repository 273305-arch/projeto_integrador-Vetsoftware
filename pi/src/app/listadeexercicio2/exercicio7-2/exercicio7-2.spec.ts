import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio72 } from './exercicio7-2';

describe('Exercicio72', () => {
  let component: Exercicio72;
  let fixture: ComponentFixture<Exercicio72>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio72],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio72);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
