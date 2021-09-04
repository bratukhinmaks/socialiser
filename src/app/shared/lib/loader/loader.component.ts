import { Component, Input } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

export enum LoaderColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  PRIMARY_ON_CONTRAST_BACKGROUND = 'primary-on-contrast-background',
  SECONDARY_ON_CONTRAST_BACKGROUND = 'secondary-on-contrast-background',
}

@Component({
  selector: 'wm-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class WmLoaderComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() mode: ProgressSpinnerMode;
  @Input() value: string | number;
  @Input() error: string;
  @Input() diameter = 120;
  @Input() strokeWidth = 5;
  @Input() strokeColor = LoaderColor.PRIMARY;
}
