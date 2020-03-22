import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string;
  @Input() highlightColor: string;
  @HostBinding("style.backgroundColor") backGroundColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.defaultColor = "gray";
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "gray"
    // );
    this.backGroundColor = this.defaultColor;
  }
  @HostListener("mouseenter") dummy(event: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "yellow"
    // );
    this.backGroundColor = this.highlightColor;
  }
  @HostListener("mouseleave") dummyLeave(event: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, "background-color", "red");
    this.backGroundColor = this.defaultColor;
  }
}
