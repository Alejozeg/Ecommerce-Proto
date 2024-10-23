import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaTiendaComponent } from './galeria-tienda.component';

describe('GaleriaTiendaComponent', () => {
  let component: GaleriaTiendaComponent;
  let fixture: ComponentFixture<GaleriaTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaTiendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
