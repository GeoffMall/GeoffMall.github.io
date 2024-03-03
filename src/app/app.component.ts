import { Component, OnInit } from '@angular/core';
import { ThemeService } from "./theme/theme.service";
import { Theme } from "./theme/theme";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    theme?: Theme;

    constructor(private themeService: ThemeService) {
        this.themeService = themeService;
    }

    ngOnInit(): void {
        this.themeService.getTheme()
            .subscribe((theme: Theme) => {
                this.theme = theme
            });
    }


}


