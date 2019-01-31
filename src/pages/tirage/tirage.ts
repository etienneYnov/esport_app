import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuizzPage } from '../quizz/quizz';
import { AreaPage } from '../area/area';

/**
 * Generated class for the TiragePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tirage',
  templateUrl: 'tirage.html',
})
export class TiragePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goQuizz(){
  	this.navCtrl.push(QuizzPage);
  }
  goArea(){
  	this.navCtrl.push(AreaPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TiragePage');
  }

}
