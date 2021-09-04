import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import {DxPieChartModule} from 'devextreme-angular';



@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    DxPieChartModule
  ],
  exports: [
    ChartComponent,
  ]
})
export class ChartModule { }
