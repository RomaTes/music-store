import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrAddToCardButtonComponent } from './pr-add-to-card-button.component';

describe('PrAddToCardButtonComponent', () => {
  let component: PrAddToCardButtonComponent;
  let fixture: ComponentFixture<PrAddToCardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrAddToCardButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrAddToCardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
