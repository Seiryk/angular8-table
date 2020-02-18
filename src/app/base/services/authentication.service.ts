import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setUser, SignOut, ToggleLoader } from '../actions/auth.actions';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: any = null;

  constructor(
    private store: Store<any>,
    private angularFireAuth: AngularFireAuth
  ) { }

  /* Sign up */
  SignUp(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        const user: any = res.user;
        user.token = user.ma;
        this.user = user;
        this.store.dispatch(setUser({ user }));
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });    
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.store.dispatch(ToggleLoader({ loader: true }));
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        const user: any = res.user;
        user.token = user.ma;
        this.user = user;
        this.store.dispatch(setUser({ user }));
        this.store.dispatch(ToggleLoader({ loader: false }));

        console.log('Successfully signed in!');
      })
      .catch(err => {
        this.store.dispatch(ToggleLoader({ loader: false }));
        console.log('Something is wrong:',err.message);
      });
  }

  /* Sign out */
  SignOut() {
    return this.angularFireAuth
      .auth
      .signOut()
      // .then(res => {
      //   this.store.dispatch(SignOut());

      // })
      // .catch(err => {
      //   console.log('Something is wrong:',err.message);
      // });
  }  

}
