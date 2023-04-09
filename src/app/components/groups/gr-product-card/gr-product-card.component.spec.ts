import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrProductCardComponent } from './gr-product-card.component';

describe('GrProductCardComponent', () => {
  let component: GrProductCardComponent;
  let fixture: ComponentFixture<GrProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrProductCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
