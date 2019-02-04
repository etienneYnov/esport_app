import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AreaPage } from '../area/area';
import { Question1Page } from '../question1/question1';

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
  	this.navCtrl.push(Question1Page);
  }
  goArea(){
  	this.navCtrl.push(AreaPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TiragePage');
  }

}
