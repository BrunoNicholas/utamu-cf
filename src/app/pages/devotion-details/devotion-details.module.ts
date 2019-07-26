import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DevotionDetailsPage } from './devotion-details.page';

const routes: Routes = [
  {
    path: '',
    component: DevotionDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DevotionDetailsPage]
})
export class DevotionDetailsPageModule {}
