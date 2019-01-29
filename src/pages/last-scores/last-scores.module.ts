import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LastScoresPage } from './last-scores';

@NgModule({
  declarations: [
    LastScoresPage,
  ],
  imports: [
    IonicPageModule.forChild(LastScoresPage),
  ],
})
export class LastScoresPageModule {}
