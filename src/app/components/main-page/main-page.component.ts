import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  language: any;
  languagePath: string;

  constructor(private http: HttpClient) {
    this.languagePath = "assets/config/language/";
    this.http.get(this.languagePath + "english.json").subscribe(res => {
      this.language = res;
      console.log(this.language.toolbar.listItems);
    });
  }

  ngOnInit() {
  }

  changeLanguage(lang: string) {
    console.log(lang);
    switch (lang) {
      case "English": {
        this.http.get(this.languagePath + "english.json").subscribe(res => {
          this.language = res;
        });
        break;
      }
      case "Spanish": {
        this.http.get(this.languagePath + "spanish.json").subscribe(res => {
          this.language = res;
        });
        break;
      }
    }

    return false;
  }

}
