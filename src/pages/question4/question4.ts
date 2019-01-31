import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AreaPage } from '../area/area';

/**
 * Generated class for the Question4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question4',
  templateUrl: 'question4.html',
})
export class Question4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goArea(){
  	this.navCtrl.push(AreaPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Question4Page');
  }

}
