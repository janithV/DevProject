import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowseComponent } from './browse/browse.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyCardComponent } from './company-card/company-card.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InternprofileComponent } from './internprofile/internprofile.component';
import { CompanybrowseComponent } from './companybrowse/companybrowse.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { CompanySignupComponent } from './company-signup/company-signup.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';

import { AuthService } from './auth.service';
// import { AuthGuard } from './auth-guard.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { NgbModule, NgbRating } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BrowseComponent,
    ContactusComponent,
    FooterComponent,
    CompanyCardComponent,
    LoginComponent,
    SignupComponent,
    InternprofileComponent,
    CompanybrowseComponent,
    ReviewCardComponent,
    CompanySignupComponent,
    CompanyprofileComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
