import { Component, Host,Input, TemplateRef, SimpleChanges, OnChanges } from '@angular/core';
import { HorizontalContextComponent } from '../horizontal-context/horizontal-context.component';
import { UtilsService } from '../utils.service';

@Component({
  selector: '[jhi-x-axis]',
  templateUrl: './x-axis.component.html',
  styleUrls: ['./x-axis.component.scss']
})
export class XAxisComponent{
  @Input() tickTemplate?: TemplateRef<any>;
  @Input() axisTemplate?: TemplateRef<any>;
  @Input() y = 0;
  @Input() x = 0;
  @Input() step = 1;
  @Input() height = 50;
  @Input() locale = 'de';
  @Input() decimalFormat = '1.0-1'

  constructor(@Host()public  context: HorizontalContextComponent, public utils : UtilsService){}
}
