import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LastScoreDetailPage } from '../pages/last-score-detail/last-score-detail';
import { LastScoresPage } from '../pages/last-scores/last-scores';
import { QrCodePage } from '../pages/qr-code/qr-code';
import { QuizzPage } from '../pages/quizz/quizz';
import { QuizzEndPage } from '../pages/quizz-end/quizz-end';
import { QuizzQ1Page } from '../pages/quizz-q1/quizz-q1';
import { QuizzQ2Page } from '../pages/quizz-q2/quizz-q2';
import { QuizzQ3Page } from '../pages/quizz-q3/quizz-q3';
import { QuizzQ4Page } from '../pages/quizz-q4/quizz-q4';
import { AreaPage } from '../pages/area/area';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LastScoreDetailPage,
    LastScoresPage,
    QrCodePage,
    QuizzPage,
    QuizzEndPage,
    QuizzQ1Page,
    QuizzQ2Page,
    QuizzQ3Page,
    QuizzQ4Page,
    AreaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LastScoreDetailPage,
    LastScoresPage,
    QrCodePage,
    QuizzPage,
    QuizzEndPage,
    QuizzQ1Page,
    QuizzQ2Page,
    QuizzQ3Page,
    QuizzQ4Page,
    AreaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
