import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalContextComponent } from './horizontal-context.component';

describe('HorizontalContextComponent', () => {
  let component: HorizontalContextComponent;
  let fixture: ComponentFixture<HorizontalContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalContextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
