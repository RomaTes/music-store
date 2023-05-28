import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrMainTitleComponent } from './gr-main-title.component';

describe('GrMainTitleComponent', () => {
  let component: GrMainTitleComponent;
  let fixture: ComponentFixture<GrMainTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrMainTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrMainTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
