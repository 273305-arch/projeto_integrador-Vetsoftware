import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio112 } from './exercicio11-2';

describe('Exercicio112', () => {
  let component: Exercicio112;
  let fixture: ComponentFixture<Exercicio112>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio112],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio112);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
