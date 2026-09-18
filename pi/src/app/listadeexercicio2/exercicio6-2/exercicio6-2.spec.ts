import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio62 } from './exercicio6-2';

describe('Exercicio62', () => {
  let component: Exercicio62;
  let fixture: ComponentFixture<Exercicio62>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio62],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio62);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
