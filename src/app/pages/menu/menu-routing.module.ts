import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from "./menu.Page";

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'menuPage',
    component: MenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule ],
})
export class MenuPageRoutingModule {}
