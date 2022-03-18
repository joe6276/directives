
import { Directive, OnInit, ElementRef ,Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective  implements OnInit{
 @HostBinding('style.backgroundColor')backgroundColor:string='transparent'
 @HostBinding('style.color')color:string='black'
 @HostBinding('style.padding')padding:string='0px'
  constructor( private elementRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {

    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'blue')
    // this.renderer.setStyle(this.elementRef.nativeElement,'color', 'white')
    // this.renderer.setStyle(this.elementRef.nativeElement,'padding', '20px')
  }
@HostListener('mouseenter') mouseOver(eventData:Event){
  // this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'blue')
  // this.renderer.setStyle(this.elementRef.nativeElement,'color', 'white')
  // this.renderer.setStyle(this.elementRef.nativeElement,'padding', '10px')
  this.backgroundColor='blue';
  this.color='white'
  this.padding='20px'

}

@HostListener('mouseleave') mouseLeave (eventData:Event){
  // this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'transparent')
  // this.renderer.setStyle(this.elementRef.nativeElement,'color', 'black')
  this.backgroundColor='transparent';
  this.color='black'
  this.padding='0px'
}

}
