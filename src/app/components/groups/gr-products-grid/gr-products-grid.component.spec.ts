import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrProductsGridComponent } from './gr-products-grid.component';

describe('GrProductsGridComponent', () => {
  let component: GrProductsGridComponent;
  let fixture: ComponentFixture<GrProductsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrProductsGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrProductsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
