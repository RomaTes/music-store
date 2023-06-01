import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrSignInComponent } from './pr-sign-in.component';

describe('PrSignInComponent', () => {
  let component: PrSignInComponent;
  let fixture: ComponentFixture<PrSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrSignInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
