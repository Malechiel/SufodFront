import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { EShopComponent } from './component/e-shop/e-shop.component';
import { ActusComponent } from './component/actus/actus.component';
import { ContactComponent } from './component/contact/contact.component';
import { IopenrageComponent } from './component/iopenrage/iopenrage.component';
import { OwiAnkorComponent } from './component/owi-ankor/owi-ankor.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { ForgottenPasswordComponent } from './component/forgotten-password/forgotten-password.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { PagesTermesComponent } from './component/pages-termes/pages-termes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { LienDirective } from './directive/lien.directive';
import { CraReleaseComponent } from './component/cra-release/cra-release.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EShopComponent,
    ActusComponent,
    ContactComponent,
    IopenrageComponent,
    OwiAnkorComponent,
    SigninComponent,
    SignupComponent,
    ForgottenPasswordComponent,
    NavbarComponent,
    FooterComponent,
    PagesTermesComponent,
    LienDirective,
    CraReleaseComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
