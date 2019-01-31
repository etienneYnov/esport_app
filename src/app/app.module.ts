import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Question1Page } from '../pages/question1/question1';
import { Question2Page } from '../pages/question2/question2';
import { Question3Page } from '../pages/question3/question3';
import { Question4Page } from '../pages/question4/question4';
import { AreaPage } from '../pages/area/area';
import { TiragePage } from '../pages/tirage/tirage';
import { QuizzPage } from '../pages/quizz/quizz';
import { ScoresPage } from '../pages/scores/scores';
import { ScoresItemsPage } from '../pages/scores-items/scores-items';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Question1Page,
    Question2Page,
    Question3Page,
    Question4Page,
    AreaPage,
    TiragePage,
    QuizzPage,
    ScoresPage,
    ScoresItemsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Question1Page,
    Question2Page,
    Question3Page,
    Question4Page,
    AreaPage,
    TiragePage,
    QuizzPage,
    ScoresPage,
    ScoresItemsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
