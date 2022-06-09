import { SignupComponent } from './component/signup/signup.component';
import { SigninComponent } from './component/signin/signin.component';
import { ContactComponent } from './component/contact/contact.component';
import { Routes } from '@angular/router';
import { ActusComponent } from './component/actus/actus.component';
import { EShopComponent } from './component/e-shop/e-shop.component';
import { HomeComponent } from './component/home/home.component';
import { ForgottenPasswordComponent } from './component/forgotten-password/forgotten-password.component';
import { IopenrageComponent } from './component/iopenrage/iopenrage.component';
import { OwiAnkorComponent } from './component/owi-ankor/owi-ankor.component';
import { PagesTermesComponent } from './component/pages-termes/pages-termes.component';
import { CraReleaseComponent } from './component/cra-release/cra-release.component';

export const routes: Routes = [
  { path: 'actus', component: ActusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'e-shop', component: EShopComponent },
  { path: 'forgotten-password', component: ForgottenPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'iopenrage', component: IopenrageComponent },
  { path: 'owi-ankor', component: OwiAnkorComponent },
  { path: 'pages-termes', component: PagesTermesComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cra-release', component: CraReleaseComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
