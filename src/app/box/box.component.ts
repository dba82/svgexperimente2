import { Component, Host, Input, OnInit, TemplateRef } from '@angular/core';
import { HorizontalLaneComponent } from '../horizontal-lane/horizontal-lane.component';
import { OnCanvasItem } from '../on-canvas-item';
@Component({
  selector: '[jhi-box]',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent {
  @Input() public startX = 0;
  @Input() public startY = 0;
  @Input() public endX = 0;
  @Input() public endY = 0;
  @Input() template?: TemplateRef<any>;

  constructor(@Host() public context : HorizontalLaneComponent){}

}
