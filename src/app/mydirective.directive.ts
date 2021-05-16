import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor(
    private elementRef: ElementRef
  ) {
      elementRef.nativeElement.style.color="blue";
   }

  //Custom directive
  @HostListener('mouseenter') onMouseEnter()
  {
  this.applyMyCss("red");
  }

  @HostListener('mouseleave') onMouseLeave()
  {
    this.applyMyCss("green");
  }

  applyMyCss(x:string)
  {
    this.elementRef.nativeElement.style.color=x;
  }

}
