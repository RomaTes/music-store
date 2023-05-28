import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrGameInfoComponent } from './gr-game-info.component';

describe('GrGameInfoComponent', () => {
  let component: GrGameInfoComponent;
  let fixture: ComponentFixture<GrGameInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrGameInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrGameInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
