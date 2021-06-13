import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import * as fromUser from '@app/store/user';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '@app/store';
import {filter, take} from 'rxjs/operators';
import * as fromDictionaries from '@app/store/dictionaries';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  title = 'course-app';

  isAuthorized$: Observable<boolean>;
  user$: Observable<fromUser.User>;

  constructor(
      private store: Store<fromRoot.State>
  ) {
  }

  ngOnInit() {
    this.isAuthorized$ = this.store.pipe(select(fromUser.getIsAuthorized));
    this.user$ = this.store.pipe(select(fromUser.getUser));

    this.store.dispatch(new fromUser.Init());

    this.store.pipe(select(fromUser.getUserState)).pipe(
        filter(state => !!state.uid),
        take(1)
    ).subscribe(() => {
      this.store.dispatch(new fromDictionaries.Read());
    });

  }

  onSignOut(): void {
    this.store.dispatch(new fromUser.SignOut());
  }
}
