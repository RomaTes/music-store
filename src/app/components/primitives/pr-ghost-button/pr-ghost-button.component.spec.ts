import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrGhostButtonComponent } from './pr-ghost-button.component';

describe('PrGhostButtonComponent', () => {
  let component: PrGhostButtonComponent;
  let fixture: ComponentFixture<PrGhostButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrGhostButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrGhostButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
