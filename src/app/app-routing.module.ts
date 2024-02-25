import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageGoComponent } from "./page-go/page-go.component";
import { PagePythonComponent } from "./page-python/page-python.component";
import { PageJavaComponent } from "./page-java/page-java.component";
import { PageHomeComponent } from "./page-home/page-home.component";

const routes: Routes = [
    {path: '', component: PageHomeComponent},
    {path: 'go', component: PageGoComponent},
    {path: 'python', component: PagePythonComponent},
    {path: 'java', component: PageJavaComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
