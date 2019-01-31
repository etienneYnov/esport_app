import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question4Page } from '../question4/question4';

/**
 * Generated class for the Question3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question3',
  templateUrl: 'question3.html',
})
export class Question3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goQuizz4(){
  	this.navCtrl.push(Question4Page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Question3Page');
  }

}
