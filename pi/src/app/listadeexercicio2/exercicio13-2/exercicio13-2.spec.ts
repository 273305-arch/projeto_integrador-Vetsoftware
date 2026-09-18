import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio132 } from './exercicio13-2';

describe('Exercicio132', () => {
  let component: Exercicio132;
  let fixture: ComponentFixture<Exercicio132>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio132],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio132);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
