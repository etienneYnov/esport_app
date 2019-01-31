import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question3Page } from '../question3/question3';

/**
 * Generated class for the Question2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question2',
  templateUrl: 'question2.html',
})
export class Question2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goQuizz3(){
  	this.navCtrl.push(Question3Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Question2Page');
  }

}
