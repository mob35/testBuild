import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabnavPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabnav',
  templateUrl: 'tabnav.html'
})
export class TabnavPage {

  1Root = '1Page'
  2Root = '2Page'
  3Root = '3Page'
  4Root = '4Page'
  5Root = '5Page'


  constructor(public navCtrl: NavController) {}

}
