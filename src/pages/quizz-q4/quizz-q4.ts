import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AreaPage } from '../pages/area/area';

/**
 * Generated class for the QuizzQ4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizz-q4',
  templateUrl: 'quizz-q4.html',
})
export class QuizzQ4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goArea(){
  	this.navCtrl.push('AreaPage');
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizzQ4Page');
  }

}
