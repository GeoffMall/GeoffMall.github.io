import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from "./page-home/page-home.component";
import { PageCodeComponent } from "./page-code/page-code.component";
import { PageMathComponent } from "./page-math/page-math.component";
import { PageMusicComponent } from "./page-music/page-music.component";
import { PageSettingsComponent } from "./page-settings/page-settings.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
    {path: 'home', component: PageHomeComponent},
    {path: 'code', component: PageCodeComponent},
    {path: 'math', component: PageMathComponent},
    {path: 'music', component: PageMusicComponent},
    {path: 'settings', component: PageSettingsComponent},

    {path: '', redirectTo: '/home', pathMatch: 'full'}, // redirect to `home`
    {path: '**', component: PageNotFoundComponent} // Wildcard route for a 404 page
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
