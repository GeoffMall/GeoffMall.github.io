import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { NavbarComponent } from './navbar/navbar.component';
import { PageGoComponent } from './page-go/page-go.component';
import { PageJavaComponent } from './page-java/page-java.component';
import { PagePythonComponent } from './page-python/page-python.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        PageGoComponent,
        PageJavaComponent,
        PagePythonComponent,
        PageHomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        FormsModule,
        ReactiveFormsModule,

        // Material
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatMenuModule,
        MatTabsModule,
        MatTableModule,
        MatToolbarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
