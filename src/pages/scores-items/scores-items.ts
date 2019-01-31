import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AreaPage } from '../area/area';

/**
 * Generated class for the ScoresItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scores-items',
  templateUrl: 'scores-items.html',
})
export class ScoresItemsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goArea(){
  	this.navCtrl.push(AreaPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoresItemsPage');
  }

}
