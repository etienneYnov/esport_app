import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LastScoreDetailPage } from './last-score-detail';

@NgModule({
  declarations: [
    LastScoreDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LastScoreDetailPage),
  ],
})
export class LastScoreDetailPageModule {}
