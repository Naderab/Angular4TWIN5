import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { FilterPipe } from './pipe/filter.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductModule } from './features/product/product.module';
import { FilterProductPipe } from './pipe/filter-product.pipe';
import { FormCategoryComponent } from './components/form-category/form-category.component';
import { TestComponent } from './components/test/test.component';
import { CategoryComponent } from './components/category/category.component';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/auth/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    FilterPipe,
    NotFoundComponent,
    FormCategoryComponent,
    CategoryComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, TestComponent, FormValidationComponent,
    HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
