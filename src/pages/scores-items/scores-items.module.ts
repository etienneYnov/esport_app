import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScoresItemsPage } from './scores-items';

@NgModule({
  declarations: [
    ScoresItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(ScoresItemsPage),
  ],
})
export class ScoresItemsPageModule {}
