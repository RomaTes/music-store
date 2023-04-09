import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrGenresMenuComponent } from './gr-genres-menu.component';

describe('GrGenresMenuComponent', () => {
  let component: GrGenresMenuComponent;
  let fixture: ComponentFixture<GrGenresMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrGenresMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrGenresMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
