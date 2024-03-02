import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Theme, ThemeClass } from "./theme";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private themeSubject = new BehaviorSubject<Theme>(themes[0]);
    private theme = this.themeSubject.asObservable();
    private themeIndex = new BehaviorSubject<number>(0);

    constructor() {
    }

    nextTheme() {
        const index = this.themeIndex.getValue();
        const nextIndex = index === themes.length - 1 ? 0 : index + 1;
        this.themeIndex.next(nextIndex);
        this.themeSubject.next(themes[nextIndex]);
    }

    getTheme(): Observable<Theme> {
        return this.theme;
    }
}

const themes: Theme[] = [
    {name: 'Light', cssClass: ThemeClass.Light},
    {name: 'Dark', cssClass: ThemeClass.Dark},
    {name: 'Retro', cssClass: ThemeClass.Retro},
    {name: 'Neon', cssClass: ThemeClass.Neon},
    {name: 'Pastel', cssClass: ThemeClass.Pastel},
    {name: 'Minimalist', cssClass: ThemeClass.Minimalist},
    {name: 'Corporate', cssClass: ThemeClass.Corporate},
    {name: 'Nature', cssClass: ThemeClass.Nature},
    {name: 'Ocean', cssClass: ThemeClass.Ocean}
];

