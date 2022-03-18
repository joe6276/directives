import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector:'[basicHighlighter]'
})
export class Highlighter implements OnInit{
constructor(private elementref:ElementRef){}
    ngOnInit(): void {
        this.elementref.nativeElement.style.backgroundColor='coral'
    }

}