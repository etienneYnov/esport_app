import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question1Page } from '../question1/question1';

/**
 * Generated class for the QuizzPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizz',
  templateUrl: 'quizz.html',
})
export class QuizzPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goQuizz1(){
  	this.navCtrl.push(Question1Page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizzPage');
  }

}
