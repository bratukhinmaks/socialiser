import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxListModule,
  DxButtonModule,
  DxTagBoxModule,
  DxFilterBuilderComponent,
  DxPieChartModule,
  DxFilterBuilderModule } from 'devextreme-angular';
import {DataService} from '@app/shared/devexpress/data-service.service';
import {MockedDataService} from '@app/shared/devexpress/mocked-data-service';
import {ChartModule} from '@app/shared/devexpress/chart/chart.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChartModule,
    DxListModule,
    DxButtonModule,
    DxTagBoxModule,
    DxFilterBuilderModule
  ],
  providers : [
    {
      provide: 'DEV',
      useValue: true,
    },
    {
      provide: DataService,
      useFactory: (DEV) => !DEV ? new DataService() : new MockedDataService(),
      deps: ['DEV']
    }
  ],
  exports: [ChartModule]
})
export class DevexpressModule { }
