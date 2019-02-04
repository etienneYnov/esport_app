import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question1Page } from '../question1/question1';
import { ScoresPage } from '../scores/scores';

/**
 * Generated class for the AreaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-area',
  templateUrl: 'area.html',
})
export class AreaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goQuizz(){
  	this.navCtrl.push(Question1Page);
  }
  goScores(){
  	this.navCtrl.push(ScoresPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AreaPage');
  }

}
