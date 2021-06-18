import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BrowseComponent } from "./browse/browse.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from './signup/signup.component';
import { InternprofileComponent } from './internprofile/internprofile.component';
import { CompanybrowseComponent } from './companybrowse/companybrowse.component';
import { ReviewCardComponent } from './review-card/review-card.component';

const appRoutes:Routes=[
    { path: '', component:HomeComponent},
    { path: 'browse', component:BrowseComponent},
    { path: 'contact-us', component:CompanybrowseComponent},
    { path: 'login', component:LoginComponent},
    { path: 'signup', component:SignupComponent},
    { path: 'login/profile', component:InternprofileComponent},
    { path: 'review', component:ReviewCardComponent}
    
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}