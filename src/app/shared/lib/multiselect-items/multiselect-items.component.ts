import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'wm-multiselect-items',
  templateUrl: './multiselect-items.component.html',
  styleUrls: ['multiselect-items.component.scss'],
})
export class WmMultiselectItemsComponent implements AfterViewInit {
  @ViewChild('itemsList') itemsList: ElementRef<HTMLElement>;
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  @Input() clear: (item: NgSelectComponent['items'][0]) => void;
  @Input() text: string;
  @Input() bindLabel: string;
  @Input()
  set items(items: NgSelectComponent['items']) {
    this.itemsHolder = items;
    this.setMaxItems();
  }
  get items(): NgSelectComponent['items'] {
    return this.itemsHolder;
  }

  private itemsHolder: NgSelectComponent['items'];
  public maxItems = 0;
  private listRestSize = 36;
  private itemRestSize = 32;

  ngAfterViewInit() {
    setTimeout(() => {
      this.setMaxItems();
    }, 0);
  }

  private setMaxItems(): void {
    if (!this.items || !this.itemsList?.nativeElement) {
      return;
    }

    const context = this.canvas.nativeElement.getContext('2d');

    let maxItems = 0;
    const containerWidth = this.itemsList.nativeElement.offsetWidth;

    this.items.reduce((acc, cur) => {
      const width = context.measureText(this.bindLabel ? cur[this.bindLabel] : cur).width;
      const sum = acc + width + this.itemRestSize;

      if (sum <= containerWidth - this.listRestSize) {
        maxItems++;
      }

      return sum;
    }, 0);

    this.maxItems = maxItems === 0 ? 1 : maxItems;
  }
}
