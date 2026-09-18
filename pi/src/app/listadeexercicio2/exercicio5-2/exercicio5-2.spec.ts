import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio52 } from './exercicio5-2';

describe('Exercicio52', () => {
  let component: Exercicio52;
  let fixture: ComponentFixture<Exercicio52>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio52],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio52);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
