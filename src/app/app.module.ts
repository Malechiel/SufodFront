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
import { ListAttaqueComponent } from './list/attaque/list-attaque/list-attaque.component';
import { ListCompteComponent } from './list/compte/list-compte/list-compte.component';
import { ListEquipementComponent } from './list/equipement/list-equipement/list-equipement.component';
import { ListIngredientComponent } from './list/ingredient/list-ingredient/list-ingredient.component';
import { ListItemComponent } from './list/item/list-item/list-item.component';
import { ListMonstreComponent } from './list/monstre/list-monstre/list-monstre.component';
import { ListPersonnageComponent } from './list/personnage/list-personnage.component';
import { EditAttaqueComponent } from './edit/attaque/edit-attaque/edit-attaque.component';
import { EditCompteComponent } from './edit/compte/edit-compte/edit-compte.component';
import { EditEquipementComponent } from './edit/equipement/edit-equipement/edit-equipement.component';
import { EditIngredientComponent } from './edit/ingredient/edit-ingredient/edit-ingredient.component';
import { EditItemComponent } from './edit/item/edit-item/edit-item.component';
import { EditMonstreComponent } from './edit/monstre/edit-monstre/edit-monstre.component';
import { EditPersonnageComponent } from './edit/personnage/edit-personnage.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
    ListAttaqueComponent,
    ListCompteComponent,
    ListEquipementComponent,
    ListIngredientComponent,
    ListItemComponent,
    ListMonstreComponent,
    ListPersonnageComponent,
    EditAttaqueComponent,
    EditCompteComponent,
    EditEquipementComponent,
    EditIngredientComponent,
    EditItemComponent,
    EditMonstreComponent,
    EditPersonnageComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
