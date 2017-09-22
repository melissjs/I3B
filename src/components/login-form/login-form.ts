import { Component, EventEmitter, Output } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account.interface';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  account = {} as Account;
  @Output() loginStatus: EventEmitter<any>;

  constructor(private toast: ToastController, private navCtrl: NavController, private navParams: NavParams, private afAuth: AngularFireAuth) {
    this.loginStatus =  new EventEmitter<any>();
  }

  navigateToPage(pageName: string) {
    this.navCtrl.setRoot(pageName);
  }

  async register() {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password);
      this.toast.create({
        message: 'User created',
        duration: 3000
      }).present();
      console.log(result);
    }
    catch (e) {
      console.error(e);
      this.toast.create({
        message: e.message,
        duration: 3000
      }).present();
    }
  }


  async login() {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password);
      this.toast.create({
        message: 'User logged in',
        duration: 3000
      }).present();
      this.navigateToPage("TabsPage")
      console.log(result);
    }
    catch (e) {
      console.error(e);
      this.toast.create({
        message: e.message,
        duration: 3000
      }).present();
    }
  }

}
