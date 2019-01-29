import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuizzQ2Page } from '../pages/quizz-q2/quizz-q2';

/**
 * Generated class for the QuizzQ1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizz-q1',
  templateUrl: 'quizz-q1.html',
})
export class QuizzQ1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goQ2(){
  	this.navCtrl.push('QuizzQ2Page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizzQ1Page');
  }

}
