import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuizzQ3Page } from '../pages/quizz-q3/quizz-q3';

/**
 * Generated class for the QuizzQ2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizz-q2',
  templateUrl: 'quizz-q2.html',
})
export class QuizzQ2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  goQ3(){
  	this.navCtrl.push('QuizzQ3Page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizzQ2Page');
  }

}
