import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:"",component:ProductListComponent},
  {path:"",component:ProductAlertsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
