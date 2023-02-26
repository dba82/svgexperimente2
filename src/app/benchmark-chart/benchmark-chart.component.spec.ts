import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkChartComponent } from './benchmark-chart.component';

describe('BenchmarkChartComponent', () => {
  let component: BenchmarkChartComponent;
  let fixture: ComponentFixture<BenchmarkChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenchmarkChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenchmarkChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
