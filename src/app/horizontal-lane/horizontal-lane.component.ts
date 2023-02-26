import { Component, QueryList, ContentChildren, OnChanges, Input, Host, SimpleChanges } from '@angular/core';
import { BoxComponent } from '../box/box.component';
import { HorizontalContextComponent } from '../horizontal-context/horizontal-context.component';
import { OnCanvasItem } from '../on-canvas-item';
import { PointComponent } from '../point/point.component';

@Component({
  selector: '[jhi-horizontal-lane]',
  templateUrl: './horizontal-lane.component.html',
  styleUrls: ['./horizontal-lane.component.scss']
})
export class HorizontalLaneComponent{
  @Input()  width = 0
  @Input()  height = 0
  @Input()  x = 0
  @Input()  y = 0;
   public displayInfo = true;
   constructor(@Host()public  context: HorizontalContextComponent){}


}
