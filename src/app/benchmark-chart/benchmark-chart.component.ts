import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartDirective } from '../chart.directive';
import { HorizontalContextComponent } from '../horizontal-context/horizontal-context.component';

@Component({
  selector: 'jhi-benchmark-chart',
  templateUrl: './benchmark-chart.component.html',
  styleUrls: ['./benchmark-chart.component.scss']
})
export class BenchmarkChartComponent{
  @Input() public dataRows : any[]= [];
  @ViewChild(ChartDirective) chart?: ChartDirective;
  @ViewChild(HorizontalContextComponent) context?: HorizontalContextComponent;

  ngOnChanges(){
    if (this.chart){
      this.chart.updateViewBox();
    }
    if (this.context){
      this.context.ngAfterContentChecked()
    }
  }
}
