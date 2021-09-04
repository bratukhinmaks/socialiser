import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet, UrlSegment} from '@angular/router';
import {animate, group, keyframes, state, style, transition, trigger} from '@angular/animations';
import {filter, map, pluck, switchMap, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

export interface DataResponce {
    type: string;
}

@Component({
    templateUrl: './auth.main.html',
    styleUrls: ['./auth.main.scss'],
    animations: [
        trigger('slideInOut', [
            state('login', style({
                left: '0',
                width: '35%',
            })),
            state('registration', style({
                right: '0',
                width: '35%',
            })),
            transition('login => registration', [group([
                    animate('2200ms ease-in-out', keyframes([
                        style({left: '10%', width: '25%', offset: 0.2 }),
                        style({left: '20%', width: '35%', offset: 0.4 }),
                        style({left: '35%', width: '45%', offset: 0.6 }),
                        style({left: '45%', width: '55%', offset: 0.8 }),
                        style({left: '55%', width: '45%', offset: 0.9 }),
                        style({left: '65%', width: '35%', offset: 1 }),
                    ])
                    ),
                ]
            )]),
            transition('registration => login', [group([
                    animate('2200ms ease-in-out', keyframes([
                            style({right: '10%', width: '25%', offset: 0.2 }),
                            style({right: '20%', width: '35%', offset: 0.4 }),
                            style({right: '35%', width: '45%', offset: 0.6 }),
                            style({right: '45%', width: '55%', offset: 0.8 }),
                            style({right: '55%', width: '45%', offset: 0.9 }),
                            style({right: '65%', width: '35%', offset: 1 }),
                        ])
                    ),
                ]
            )]),
        ]),
        trigger('appearFromAbove', [
            state('above', style({
                opacity: '0',
            })),
            state('to', style({
                opacity: '1',
            })),
            transition('above => to', [group([
                    animate('2200ms ease-in-out', keyframes([
                        style({opacity: '0.25', offset: 0.2 }),
                        style({opacity: '0.35', offset: 0.4 }),
                        style({opacity: '0.45', offset: 0.6 }),
                        style({opacity: '0.55', offset: 0.8 }),
                        style({opacity: '0.65', offset: 0.9 }),
                        style({opacity: '1', offset: 1 }),
                    ])
                    ),
                ]
            )])
        ]),
    ]
})

export class AuthMainComponent implements OnInit {
    public animationAppear = 'to';
    public type$: Observable<any>;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.type$ = this.route.firstChild.data;
    }

    prepareRoute(outlet: RouterOutlet) {
        console.log(outlet.activatedRoute.firstChild.data)
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }

    ngOnInit(): void {
        this.initType();
    }

    initType() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this.type$ = this.route.firstChild.data)
        ).subscribe();
    }


}
