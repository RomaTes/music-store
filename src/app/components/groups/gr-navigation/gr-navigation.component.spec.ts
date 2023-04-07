import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrNavigationComponent } from './gr-navigation.component';

describe('GrNavigationComponent', () => {
  let component: GrNavigationComponent;
  let fixture: ComponentFixture<GrNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
