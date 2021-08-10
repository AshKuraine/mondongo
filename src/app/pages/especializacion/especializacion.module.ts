import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecializacionComponent } from './especializacion.component';
import { EspecializacionRoutingModule } from './especializacion-routing.module';
import { MaterialModuleModule } from 'src/app/angular-material/angular-material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [EspecializacionComponent, DashboardComponent],
  imports: [
    CommonModule,
    EspecializacionRoutingModule,
    MaterialModuleModule,
    FlexLayoutModule
    ],
})
export class EspecializacionModule {}

