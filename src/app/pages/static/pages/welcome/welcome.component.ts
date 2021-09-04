import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {availableLangs, Language} from '@app/config/lang';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  availableLanguages: Language[] = availableLangs;
  selectedLang: any

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.selectedLang = this.translateService.getLangs()[0]
  }

  setLanguage(event: any) {
    this.translateService.use(this.selectedLang)
  }
}
