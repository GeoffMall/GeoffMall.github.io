import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageGoComponent } from './page-go/page-go.component';
import { PageJavaComponent } from './page-java/page-java.component';
import { PagePythonComponent } from './page-python/page-python.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageCodeComponent } from './page-code/page-code.component';

@NgModule({
    declarations: [
        AppComponent,

        NavbarComponent,
        FooterComponent,

        PageGoComponent,
        PageJavaComponent,
        PagePythonComponent,
        PageHomeComponent,
        PageCodeComponent,
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
