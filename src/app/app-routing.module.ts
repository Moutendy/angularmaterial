import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './material/material.component';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {
    path: 'support_formation',
    component: MaterialComponent
  },
  {
    path:'',
    redirectTo:'support_formation',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
