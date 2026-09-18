import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio32 } from './exercicio3-2';

describe('Exercicio32', () => {
  let component: Exercicio32;
  let fixture: ComponentFixture<Exercicio32>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio32],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio32);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
