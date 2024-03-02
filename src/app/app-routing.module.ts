import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from "./page-home/page-home.component";
import { PageCodeComponent } from "./page-code/page-code.component";
import { PageMathComponent } from "./page-math/page-math.component";
import { PageMusicComponent } from "./page-music/page-music.component";
import { PageSettingsComponent } from "./page-settings/page-settings.component";

const routes: Routes = [
    {path: '', component: PageHomeComponent},
    {path: 'code', component: PageCodeComponent},
    {path: 'math', component: PageMathComponent},
    {path: 'music', component: PageMusicComponent},
    {path: 'settings', component: PageSettingsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
