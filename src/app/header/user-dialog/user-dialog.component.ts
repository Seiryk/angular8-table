import { Component, Input, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { AuthenticationService } from '../../base/services/authentication.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {
  mode: string = 'SignIn';
  email: string = '';
  password: string = '';
  loader: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    public authenticationService: AuthenticationService,
    private store: Store<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      store.pipe(select('auth'))
        .subscribe(state => {
          this.loader = state.loader;
        })
    }

  togleMode(): void {
    this.mode = this.mode === 'SignIn' ? 'SignUp' : 'SignIn';
  }

  onSignInUp(): void {
    if (this.mode === 'SignIn') this.authenticationService.SignIn(this.email, this.password);
    else this.authenticationService.SignUp(this.email, this.password);
  }

}
