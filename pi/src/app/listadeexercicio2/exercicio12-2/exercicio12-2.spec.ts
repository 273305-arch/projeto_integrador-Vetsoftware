import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio122 } from './exercicio12-2';

describe('Exercicio122', () => {
  let component: Exercicio122;
  let fixture: ComponentFixture<Exercicio122>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio122],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio122);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
