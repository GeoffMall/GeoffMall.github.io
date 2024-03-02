import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageCodeComponent } from './page-code/page-code.component';
import { SvgComponent } from './svg/svg.component';
import { PageMusicComponent } from './page-music/page-music.component';
import { PageMathComponent } from './page-math/page-math.component';
import { PageSettingsComponent } from './page-settings/page-settings.component';

@NgModule({
    declarations: [
        AppComponent,

        NavbarComponent,

        PageHomeComponent,
        PageCodeComponent,
        SvgComponent,
        PageMusicComponent,
        PageMathComponent,
        PageSettingsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        FormsModule,
        ReactiveFormsModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
