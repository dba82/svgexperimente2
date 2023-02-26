import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[jhi-chart]',
})
export class ChartDirective {

  constructor(private elementRef : ElementRef) { 
    
  }

  public set viewBox(s : string){
    this.elementRef.nativeElement.setAttribute('viewBox', s);
  }

  updateViewBox(){
    const contentBox = this.elementRef.nativeElement.getBBox();;
    this.elementRef.nativeElement.setAttribute('viewBox', `${contentBox.x} ${contentBox.y} ${contentBox.width} ${contentBox.height}`);
  }
}
