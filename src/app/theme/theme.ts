export enum ThemeClass {
    Light = 'light-theme',
    Dark = 'dark-theme',
    Retro = 'retro-theme',
    Neon = 'neon-theme',
    Pastel = 'pastel-theme',
    Minimalist = 'minimalist-theme',
    Corporate = 'corporate-theme',
    Nature = 'nature-theme',
    Ocean = 'ocean-theme',
}

export interface Theme {
    name: string;
    cssClass: ThemeClass
}

