import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BrowseComponent } from "./browse/browse.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { HomeComponent } from "./home/home.component";

const appRoutes:Routes=[
    { path: '', component:HomeComponent},
    { path: 'browse', component:BrowseComponent},
    { path: 'contact-us', component:ContactusComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}