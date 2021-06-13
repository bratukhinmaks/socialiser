import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, UrlSegment} from '@angular/router';
import {animate, group, keyframes, state, style, transition, trigger} from '@angular/animations';
import {filter, switchMap, tap} from 'rxjs/operators';

export interface DataResponce {
    type: string;
}

@Component({
    templateUrl: './auth.main.html',
    styleUrls: ['./auth.main.scss'],
    animations: [
        trigger('slideInOut', [
            state('left', style({
                left: '0',
                width: '35%',
            })),
            state('right', style({
                right: '0',
                width: '35%',
            })),
            transition('left => right', [group([
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
            transition('right => left', [group([
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
            // transition('out => in', [group([
            //         animate('1ms ease-in-out', style({
            //             'visibility': 'visible'
            //         })),
            //         animate('600ms ease-in-out', style({
            //             'max-height': '500px'
            //         })),
            //         animate('800ms ease-in-out', style({
            //             'opacity': '1'
            //         }))
            //     ]
            // )])
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
                    // animate('700ms ease-in-out', style({
                    //     opacity: 1,
                    // }))
                ]
            )])
            // transition('out => in', [group([
            //         animate('1ms ease-in-out', style({
            //             'visibility': 'visible'
            //         })),
            //         animate('600ms ease-in-out', style({
            //             'max-height': '500px'
            //         })),
            //         animate('800ms ease-in-out', style({
            //             'opacity': '1'
            //         }))
            //     ]
            // )])
        ]),
    ]
})

export class AuthMainComponent implements OnInit {
    public animation = 'right';
    public animationAppear = 'to';
    public type = 'login';

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
         this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            switchMap(() => this.route.firstChild.data),
            tap(() => {
                this.route.firstChild.data.subscribe((data: DataResponce) => {
                    this.animation = data.type === 'login' ? 'right' : 'left';
                    this.animationAppear = data.type === 'login' ? 'to' : 'above';
                });
            })
        ).subscribe((data: DataResponce) => this.type = data.type);
    }


}
