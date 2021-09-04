import { Injectable } from '@angular/core';
import {PopulationByRegion} from '@app/shared/devexpress/mocked-data-service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getPopulationByRegions(): PopulationByRegion[] {
    return [];
  }
}
