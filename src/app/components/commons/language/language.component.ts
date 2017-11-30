import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'cmp-ita-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ukr', 'pol']);
    translate.setDefaultLang('en');

    const  browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ukr|pol/) ? browserLang : 'en');

  }
}
