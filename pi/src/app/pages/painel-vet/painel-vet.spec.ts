import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelVet } from './painel-vet';

describe('PainelVet', () => {
  let component: PainelVet;
  let fixture: ComponentFixture<PainelVet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PainelVet],
    }).compileComponents();

    fixture = TestBed.createComponent(PainelVet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
