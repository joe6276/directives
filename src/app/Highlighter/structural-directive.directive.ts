import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]'
})
export class StructuralDirectiveDirective {
  @Input () set appStructuralDirective(condition:boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef)
    }else{
      this.vcRef.clear()
    }
  }

  constructor(private vcRef:ViewContainerRef, private templateRef:TemplateRef<any>) { }

}
