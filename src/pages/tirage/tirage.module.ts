import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TiragePage } from './tirage';

@NgModule({
  declarations: [
    TiragePage,
  ],
  imports: [
    IonicPageModule.forChild(TiragePage),
  ],
})
export class TiragePageModule {}
