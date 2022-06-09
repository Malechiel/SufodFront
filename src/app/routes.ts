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
import { ListPersonnageComponent } from './list/personnage/list-personnage.component';
import { ListCompteComponent } from './list/compte/list-compte/list-compte.component';
import { ListItemComponent } from './list/item/list-item/list-item.component';
import { ListAttaqueComponent } from './list/attaque/list-attaque/list-attaque.component';
import { ListMonstreComponent } from './list/monstre/list-monstre/list-monstre.component';
import { ListIngredientComponent } from './list/ingredient/list-ingredient/list-ingredient.component';
import { ListEquipementComponent } from './list/equipement/list-equipement/list-equipement.component';
import { EditPersonnageComponent } from './edit/personnage/edit-personnage.component';
import { EditCompteComponent } from './edit/compte/edit-compte/edit-compte.component';
import { EditItemComponent } from './edit/item/edit-item/edit-item.component';
import { EditAttaqueComponent } from './edit/attaque/edit-attaque/edit-attaque.component';
import { EditMonstreComponent } from './edit/monstre/edit-monstre/edit-monstre.component';
import { EditIngredientComponent } from './edit/ingredient/edit-ingredient/edit-ingredient.component';
import { EditEquipementComponent } from './edit/equipement/edit-equipement/edit-equipement.component';
import { AnonymousService } from './services/anonymous.service';
import { AuthenticatedGuardService } from './services/authenticated-guard.service';
import { MenuComponent } from './component/menu/menu.component';

export const routes: Routes = [
  { path: 'actus', component: ActusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'e-shop', component: EShopComponent },
  { path: 'forgotten-password', component: ForgottenPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'iopenrage', component: IopenrageComponent },
  { path: 'owi-ankor', component: OwiAnkorComponent },
  { path: 'pages-termes', component: PagesTermesComponent },
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [AnonymousService],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AnonymousService],
  },
  { path: 'cra-release', component: CraReleaseComponent },
  {
    path: 'admin/personnage/list',
    component: ListPersonnageComponent,
    canActivate: [AuthenticatedGuardService],
  },
  {
    path: 'admin/personnage/edit',
    component: EditPersonnageComponent,
    canActivate: [AuthenticatedGuardService],
  },

  {
    path: 'admin/personnage/edit/:id',
    component: EditPersonnageComponent,
    canActivate: [AuthenticatedGuardService],
  },

  {
    path: 'admin/compte/list',
    component: ListCompteComponent,
    canActivate: [AuthenticatedGuardService],
  },
  {
    path: 'admin/compte/edit',
    component: EditCompteComponent,
    canActivate: [AuthenticatedGuardService],
  },

  {
    path: 'admin/compte/edit/:id',
    component: EditCompteComponent,
    canActivate: [AuthenticatedGuardService],
  },

  {
    path: 'admin/item/list',
    component: ListItemComponent,
    canActivate: [AuthenticatedGuardService],
  },
  {
    path: 'admin/item/edit',
    component: EditItemComponent,
    canActivate: [AuthenticatedGuardService],
  },

  {
    path: 'admin/item/edit/:id',
    component: EditItemComponent,
    canActivate: [AuthenticatedGuardService],
  },

  {
    path: 'admin/attaque/list',
    component: ListAttaqueComponent,
    canActivate: [AuthenticatedGuardService],
  },
  {
    path: 'admin/attaque/edit',
    component: EditAttaqueComponent,
    canActivate: [AuthenticatedGuardService],
  },

  {
    path: 'admin/attaque/edit/:id',
    component: EditAttaqueComponent,
    canActivate: [AuthenticatedGuardService],
  },

  {
    path: 'admin/monstre/list',
    component: ListMonstreComponent,
    canActivate: [AuthenticatedGuardService],
  },
  {
    path: 'admin/monstre/edit',
    component: EditMonstreComponent,
    canActivate: [AuthenticatedGuardService],
  },

  {
    path: 'admin/monstre/edit/:id',
    component: EditMonstreComponent,
    canActivate: [AuthenticatedGuardService],
  },

  {
    path: 'admin/ingredient/list',
    component: ListIngredientComponent,
    canActivate: [AuthenticatedGuardService],
  },
  {
    path: 'admin/ingredient/edit',
    component: EditIngredientComponent,
    canActivate: [AuthenticatedGuardService],
  },
  {
    path: 'admin/ingredient/edit/:id',
    component: EditIngredientComponent,
    canActivate: [AuthenticatedGuardService],
  },

  {
    path: 'admin/equipement/list',
    component: ListEquipementComponent,
    canActivate: [AuthenticatedGuardService],
  },
  {
    path: 'admin/equipement/edit',
    component: EditEquipementComponent,
    canActivate: [AuthenticatedGuardService],
  },
  {
    path: 'admin/equipement/edit/:id',
    component: EditEquipementComponent,
    canActivate: [AuthenticatedGuardService],
  },
  {
    path: 'admin',
    component: MenuComponent,
    canActivate: [AuthenticatedGuardService],
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
