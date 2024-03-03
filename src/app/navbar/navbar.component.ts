import { Component, OnInit } from '@angular/core';
import { SVG } from "../svg/svg.component";
import { ThemeService } from "../theme/theme.service";
import { Theme } from "../theme/theme";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    menuOpen = false;
    SVG = SVG;
    theme?: Theme;

    constructor(private themeService: ThemeService) {
        this.themeService = themeService;
    }

    ngOnInit(): void {
        this.themeService.getTheme().subscribe((theme) => {
            this.theme = theme;
        });
    }

    toggleTheme(): void {
        this.themeService.nextTheme();
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
        console.log(this.menuOpen);
    }

}
