import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuizzQ4Page } from '../pages/quizz-q4/quizz-q4';

/**
 * Generated class for the QuizzQ3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizz-q3',
  templateUrl: 'quizz-q3.html',
})
export class QuizzQ3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goQ4(){
  	this.navCtrl.push('QuizzQ4Page');
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizzQ3Page');
  }

}
