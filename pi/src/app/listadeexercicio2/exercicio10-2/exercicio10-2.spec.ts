import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio102 } from './exercicio10-2';

describe('Exercicio102', () => {
  let component: Exercicio102;
  let fixture: ComponentFixture<Exercicio102>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio102],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio102);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
