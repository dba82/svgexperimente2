import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalLaneComponent } from './horizontal-lane.component';

describe('HorizontalLaneComponent', () => {
  let component: HorizontalLaneComponent;
  let fixture: ComponentFixture<HorizontalLaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalLaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalLaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
