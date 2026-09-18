import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio82 } from './exercicio8-2';

describe('Exercicio82', () => {
  let component: Exercicio82;
  let fixture: ComponentFixture<Exercicio82>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio82],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio82);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
