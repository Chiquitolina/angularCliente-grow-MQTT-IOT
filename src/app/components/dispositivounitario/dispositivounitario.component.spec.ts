import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivounitarioComponent } from './dispositivounitario.component';

describe('DispositivounitarioComponent', () => {
  let component: DispositivounitarioComponent;
  let fixture: ComponentFixture<DispositivounitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispositivounitarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispositivounitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
