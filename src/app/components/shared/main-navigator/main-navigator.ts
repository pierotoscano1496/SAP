import { OnInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './main-navigator.html',
    selector: 'main-navigator'
})
export class MainNavigator implements OnInit {
    language: any;
    languagePath: string;

    constructor(private http: HttpClient) {
        this.languagePath = "assets/config/language/";
        this.http.get(this.languagePath + "english.json").subscribe(res => {
            this.language = res;
            console.log(this.language.toolbar.listItems);
        });
    }

    ngOnInit(): void {

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
            case "Deutsch": {
                this.http.get(this.languagePath + "deutsch.json").subscribe(res => {
                    this.language = res;
                });
                break;
            }
            case "French": {
                this.http.get(this.languagePath + "french.json").subscribe(res => {
                    this.language = res;
                });
                break;
            }
            case "Italian": {
                this.http.get(this.languagePath + "italian.json").subscribe(res => {
                    this.language = res;
                });
                break;
            }
        }

        return false;
    }
}