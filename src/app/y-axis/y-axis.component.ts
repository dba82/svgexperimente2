import { Component, Host, OnInit, Input, TemplateRef, SimpleChanges, OnChanges } from '@angular/core';
import { HorizontalContextComponent } from '../horizontal-context/horizontal-context.component';
import { UtilsService } from '../utils.service';

@Component({
  selector: '[jhi-y-axis]',
  templateUrl: './y-axis.component.html',
  styleUrls: ['./y-axis.component.scss']
})
export class YAxisComponent  {

  @Input() tickTemplate?: TemplateRef<any>;
  @Input() axisTemplate?: TemplateRef<any>;
  @Input() y = 0;
  @Input() x = 0;
  @Input() step = 1;
  @Input() height = 50;

  constructor(@Host()public  context: HorizontalContextComponent, public utils : UtilsService){}

}
