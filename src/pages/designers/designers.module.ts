import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DesignersPage } from './designers';

@NgModule({
  declarations: [
    DesignersPage,
  ],
  imports: [
    IonicPageModule.forChild(DesignersPage),
  ],
})
export class DesignersPageModule {}
