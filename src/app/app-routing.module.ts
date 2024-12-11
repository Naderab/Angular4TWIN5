import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { FormCategoryComponent } from './components/form-category/form-category.component';
import { LoginComponent } from './components/auth/login/login.component';
import { authentificationGuard } from './guards/authentification.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authentificationGuard],
  },
  {
    path: 'category/add',
    component: FormCategoryComponent,
    canActivate: [authentificationGuard],
  },
  {
    path: 'category/update/:id',
    component: FormCategoryComponent,
    canActivate: [authentificationGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () =>
      import('./features/product/product.module').then((m) => m.ProductModule),
    canActivate: [authentificationGuard],
  },
  {
    path: 'apropos',
    loadChildren: () =>
      import('./features/apropos/apropos.module').then((m) => m.AproposModule),
    canActivate: [authentificationGuard],
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.module').then((m) => m.ContactModule),
    canActivate: [authentificationGuard],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [authentificationGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
