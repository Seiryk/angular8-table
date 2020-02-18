import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { AuthenticationService } from '../base/services/authentication.service';


import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

const categories = {
  animals: [
    {
      label: 'vertebrates',
      id: 'vertebrates',
      nestedId: 'vertebrates',
    },
    {
      label: 'invertebrates',
      id: 'invertebrates',
      nestedId: 'invertebrates',
    },
  ],
  vertebrates: [
    {
      label: 'fish',
      id: 'fish',
      nestedId: 'fish',
    },
    {
      label: 'Amphibians',
      id: 'amphibians',
      nestedId: 'amphibians',
    },
    {
      label: 'reptiles',
      id: 'reptiles',
      nestedId: 'reptiles',
    },
    {
      label: 'Birds',
      id: 'birds',
    },
    {
      label: 'Mammals',
      id: 'mammals',
    },
  ],
  invertebrates: [
    {
      label: 'Insects',
      id: 'insects',
    },
    {
      label: 'Molluscs',
      id: 'molluscs',
    },
    {
      label: 'Crustaceans',
      id: 'crustaceans',
    },
  ],
  reptiles: [
    {
      label: 'Banded Day Gecko',
      id: 'bandedDayGecko',
    },
    {
      label: 'Black Tree Monitor',
      id: 'blackTreeMonitor',
    },
  ],
  fish: [
    {
      label: 'Baikal oilfish',
      id: 'baikalOilfish',
    },
    {
      label: 'Bala shark',
      id: 'balaShark',
    },
  ],
  amphibians: [
    {
      label: 'Sonoran desert toad',
      id: 'sonoranDesertToad',
    },
    {
      label: 'Western toad',
      id: 'westernToad',
    },
  ],
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
      state('closed', style({
        height: '48px'
      })),
      state('open', style({
        height: '500px',
      })),
      transition('open => closed', [
        animate('0.1s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  isLoged = false;
  categories = categories;
  animalss = 'animals'

  toggleCategories(status) {
    console.log(status)
    this.isOpen = status;
  }
  constructor(
    public dialog: MatDialog,
    public authenticationService: AuthenticationService,
    private store: Store<any>,
  ) {
    const auth = store.pipe(select('auth'));
    auth.subscribe(state => {
      this.isLoged = Boolean(state.user);
      if (this.isLoged) this.dialog.closeAll()
    })
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '400px',
      height: '450px',
    });
  }

  onSignOut(): void {
    this.authenticationService.SignOut();
  }

}
