import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question2Page } from '../question2/question2';

/**
 * Generated class for the Question1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question1',
  templateUrl: 'question1.html',
})
export class Question1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goQuizz2(){
  	this.navCtrl.push(Question2Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Question1Page');
  }

}
