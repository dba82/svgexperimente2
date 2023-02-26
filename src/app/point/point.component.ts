import { Component, Host, Input, TemplateRef } from '@angular/core';
import { HorizontalLaneComponent } from '../horizontal-lane/horizontal-lane.component';
import { OnCanvasItem } from '../on-canvas-item';

@Component({
  selector: '[jhi-point]',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent {
  @Input() x : number|undefined;
  @Input() y : number|undefined;
  @Input() template?: TemplateRef<any>;
  @Input() edgeCases?: Object = {};
  constructor(@Host() public context : HorizontalLaneComponent){}
}


