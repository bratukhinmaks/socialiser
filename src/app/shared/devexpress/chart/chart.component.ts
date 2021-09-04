import {Component, Inject, OnInit} from '@angular/core';
import {PercentPipe} from '@angular/common';
import {MockedDataService, PopulationByRegion} from '@app/shared/devexpress/mocked-data-service';
import {DataService} from '@app/shared/devexpress/data-service.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent  {

  pipe: any = new PercentPipe('en-US');

  populationByRegions: PopulationByRegion[];

  constructor(@Inject(DataService) service: MockedDataService) {
    this.populationByRegions = service.getPopulationByRegions();
  }

  customizeTooltip = (arg: any) => {
    return {
      text: arg.valueText + ' - ' + this.pipe.transform(arg.percent, '1.2-2')
    };
  }

}
