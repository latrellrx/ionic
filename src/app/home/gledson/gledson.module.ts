import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GledsonPage } from './gledson.page';

const routes: Routes = [
  {
    path: '',
    component: GledsonPage
  },
  
  { path: 'grid', loadChildren: './grid/grid.module#GridPageModule' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GledsonPage]
})
export class GledsonPageModule {}
