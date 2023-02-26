import { AfterContentChecked, AfterContentInit, Component, ContentChild, ContentChildren, Host, Input, OnChanges, OnInit, QueryList } from '@angular/core';
import { ChartDirective } from '../chart.directive';
import { HorizontalLaneComponent } from '../horizontal-lane/horizontal-lane.component';
import { XAxisComponent } from '../x-axis/x-axis.component';

@Component({
  selector: '[jhi-horizontal-context]',
  templateUrl: './horizontal-context.component.html',
  styleUrls: ['./horizontal-context.component.scss']
})
export class HorizontalContextComponent implements AfterContentChecked{
  @Input() start: number = 0;
  @Input() end : number = 5;
  @Input() height : number = 0;
  // @Input() width : number = 0;

  @ContentChildren(HorizontalLaneComponent) private lanes? : QueryList<HorizontalLaneComponent>;
  @ContentChildren(XAxisComponent) private xAxes? : QueryList<HorizontalLaneComponent>;

  public canvasStart : number = 0;
  public canvasEnd : number = 1000;

  public get xStart(){
    return this.start;
  }

  public get xEnd(){
    return this.end;
  }

  public get canvasXStart(){
    return this.canvasStart;
  }

  public get canvasXEnd(){
    return this.canvasEnd;
  }

  public get width(){
    return this.canvasEnd - this.canvasStart;
  }

  public projectOnCanvas = (value:number|undefined):number|undefined=>{
    if (!value) return undefined;
    return this.canvasStart + (value * (this.canvasEnd-this.canvasStart) / (this.end - this.start));
  }

  constructor(@Host() private chart : ChartDirective){}

  laneHeightUpTo(index:number):number{
    if (!this.lanes) return 0;
    return [...this.lanes].slice(0,index).reduce((a, l) => a + (l.height || 0), 0);
  }
  ngAfterContentChecked(): void {
   if (this.height === 0){
    if (this.lanes){
        this.height = this.lanes.reduce((a, l) => a + (l.height || 0), 0);
      }
   if (this.xAxes){
    console.log(this.height)
    this.height += this.xAxes.reduce((a, ax) => a + (ax.height || 0), 0);
    console.log(this.height)
  }


  setTimeout(this.chart.updateViewBox.bind(this.chart), 0);
/*       if (this.width === 0){
        this.width = Math.max(...this.lanes.map(lane=>lane.width || 0));
        console.log(this.width)
      } */
    }
  }
}
