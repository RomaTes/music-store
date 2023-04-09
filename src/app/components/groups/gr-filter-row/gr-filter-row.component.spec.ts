import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrFilterRowComponent } from './gr-filter-row.component';

describe('GrFilterRowComponent', () => {
  let component: GrFilterRowComponent;
  let fixture: ComponentFixture<GrFilterRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrFilterRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrFilterRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
