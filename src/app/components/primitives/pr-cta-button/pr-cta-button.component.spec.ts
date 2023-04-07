import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrCtaButtonComponent } from './pr-cta-button.component';

describe('PrCtaButtonComponent', () => {
  let component: PrCtaButtonComponent;
  let fixture: ComponentFixture<PrCtaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrCtaButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrCtaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
