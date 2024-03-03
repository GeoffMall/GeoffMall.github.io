import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageCodeComponent } from './page-code/page-code.component';
import { PageMusicComponent } from './page-music/page-music.component';
import { PageMathComponent } from './page-math/page-math.component';
import { PageSettingsComponent } from './page-settings/page-settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,

        NavbarComponent,

        PageHomeComponent,
        PageCodeComponent,
        PageMusicComponent,
        PageMathComponent,
        PageSettingsComponent,
        PageNotFoundComponent,
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
