import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent  {
    constructor(private translate: TranslateService) {
        const  currentLanguage  =  this.translate.getBrowserLang();
        this.translate.setDefaultLang(currentLanguage);
        this.translate.use(currentLanguage);
    }
}
