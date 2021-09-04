import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class PopulationByRegion {
    region: string;
    val: number;
}

const populationByRegions: PopulationByRegion[] = [{
    region: 'Asia',
    val: 4119626293
}, {
    region: 'Africa',
    val: 1012956064
}, {
    region: 'Northern America',
    val: 344124520
}, {
    region: 'Latin America and the Caribbean',
    val: 590946440
}, {
    region: 'Europe',
    val: 727082222
}, {
    region: 'Oceania',
    val: 35104756
}];

export class MockedDataService {

    constructor() {
    }
    getPopulationByRegions(): PopulationByRegion[] {
        return populationByRegions;
    }
}
