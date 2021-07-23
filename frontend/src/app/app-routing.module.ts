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
import { CompanySignupComponent } from './company-signup/company-signup.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
// import { AuthGuard } from "./auth-guard.service";

const appRoutes:Routes=[
    { path: '', component:HomeComponent},
    { path: 'browse', component:BrowseComponent},
    { path: 'contact-us', component:ContactusComponent},
    { path: 'login',  component:LoginComponent},
    { path: 'signup', component:SignupComponent},
    { path: 'company-signup', component:CompanySignupComponent},
    { path: 'companyprofile', component:CompanyprofileComponent},
    { path: 'review', component:ReviewCardComponent},
    
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}