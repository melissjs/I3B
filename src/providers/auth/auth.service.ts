import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account.interface'
import { LoginResponse } from '../../models/login/login-response.interface'
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
  }

  // Get user
  getAuthenticatedUser() {
    return this.afAuth.authState;
  }

  // Register user
    async register(account: Account) {
    try {
      return <LoginResponse> {
        result: await this.afAuth.auth.createUserWithEmailAndPassword(account.email, account.password)
      }
    }
    catch (e) {      
      return <LoginResponse> {
      error: e
    }
    }
  }

  // Login user
  async signInWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse> {
        result: await this.afAuth.auth.signInWithEmailAndPassword(account.email, account.password)
      } 
    }
    catch (e) {
      return <LoginResponse> {
        error: e
      }
    }
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

}
