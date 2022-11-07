import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';

const routes: Routes = [
  {
    path: 'vehicles-list',
    component: VehicleListComponent,
  },
  { path: '', redirectTo: 'vehicles-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
