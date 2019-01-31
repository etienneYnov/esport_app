import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScoresItemsPage } from '../scores-items/scores-items';

/**
 * Generated class for the ScoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scores',
  templateUrl: 'scores.html',
})
export class ScoresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goScoresItem(){
  	this.navCtrl.push(ScoresItemsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoresPage');
  }

}
