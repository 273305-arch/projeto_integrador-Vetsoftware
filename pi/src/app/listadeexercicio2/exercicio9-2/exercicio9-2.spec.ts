import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio92 } from './exercicio9-2';

describe('Exercicio92', () => {
  let component: Exercicio92;
  let fixture: ComponentFixture<Exercicio92>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio92],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio92);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
