import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Producto5Component } from './producto5.component';

describe('Producto5Component', () => {
  let component: Producto5Component;
  let fixture: ComponentFixture<Producto5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Producto5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Producto5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
