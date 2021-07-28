import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input() appHighLight = '';
  @Input() defaultColor = '';

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    console.log('HighLightDirective ngOnInit');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighLight || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }


}
