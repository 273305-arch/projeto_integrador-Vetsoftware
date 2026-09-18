import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio22 } from './exercicio2-2';

describe('Exercicio22', () => {
  let component: Exercicio22;
  let fixture: ComponentFixture<Exercicio22>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio22],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio22);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
