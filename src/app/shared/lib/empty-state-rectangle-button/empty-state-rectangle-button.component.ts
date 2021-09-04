import {
  Component,
  AfterViewChecked,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
  Input,
} from '@angular/core';

@Component({
  selector: 'wm-empty-state-rectangle-button',
  templateUrl: './empty-state-rectangle-button.component.html',
  styleUrls: ['./empty-state-rectangle-button.component.scss'],
})
export class WmEmptyStateRectangleButtonComponent implements AfterViewChecked {
  @ViewChild('dashedButtonContainer') dashedButtonContainer: ElementRef;
  @Input() disabled = false;

  public RECT_OFFSET_WIDTH = 3;
  public RECT_OFFSET_HEIGHT = 2;
  public svgHeight: number;
  public svgWidth: number;
  public rectHeight: number;
  public rectWidth: number;

  constructor(private changeDetection: ChangeDetectorRef) { }

  public ngAfterViewChecked(): void {
    this.svgHeight = this.dashedButtonContainer?.nativeElement?.offsetHeight;
    this.svgWidth = this.dashedButtonContainer?.nativeElement?.offsetWidth;
    this.rectHeight = this.svgHeight - this.RECT_OFFSET_HEIGHT;
    this.rectWidth = this.svgWidth - this.RECT_OFFSET_WIDTH;
    this.changeDetection.detectChanges();
  }
}
