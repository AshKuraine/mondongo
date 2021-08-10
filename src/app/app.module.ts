import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';

/*import { PharmacyComponent } from './pages/pharmacy/pharmacy.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductsComponent } from './pages/products/products.component';
import { StudentsComponent } from './pages/students/students.component';
import { TopicalComponent } from './pages/topical/topical.component';*/

//import { ToastrModule } from 'ngx-toastr';
import { FlexLayoutModule } from "@angular/flex-layout";
import { EspecializacionComponent } from './pages/especializacion/especializacion.component';
import { AppointmentsComponent } from './pages/user/appointments/appointments.component';
@NgModule({
  declarations: [
    AppComponent,
    /*EspecializacionComponent,
    AdminComponent,
    PharmacyComponent,
    CustomerComponent,
    CategoriesComponent,
    ProductsComponent,
    StudentsComponent,
    TopicalComponent,*/
  ],
  imports: [
    BrowserModule,
    MaterialModuleModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }