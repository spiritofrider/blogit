import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;

  constructor(public afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe(data => this.authState = data)
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get currentUserId(): string{
    return this.authenticated? this.authState.uid : null;
  }

  login(){
    this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider);
  }

  logout(){
    this.afAuth.signOut();
  }


}
