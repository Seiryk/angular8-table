import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';





import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CellLayoutCulcDirective } from './base/derectives/cellLayoutCulc/cellLayoutCulc.directive';
import { ProductComponent } from './base/components/product/product.component';

// services
import { AuthenticationService } from './base/services/authentication.service';

// reducers
import reducers from './base/reducers'

// effects


// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { UserDialogComponent } from './header/user-dialog/user-dialog.component';
import { PicklistComponent } from './base/components/picklist/picklist.component';
import { ContentComponent } from './base/components/picklist/content/content.component';
import { TableWrapperComponent } from './base/components/Table/table-wrapper/table-wrapper.component';
import { TableHeaderComponent } from './base/components/Table/table-header/table-header.component';
import { TableHeaderCellComponent } from './base/components/Table/table-header-cell/table-header-cell.component';
import { TableBodyComponent } from './base/components/Table/table-body/table-body.component';
import { TableBodyCellComponent } from './base/components/Table/table-body-cell/table-body-cell.component';
import { TableBodyRowComponent } from './base/components/Table/table-body-row/table-body-row.component';
import { MatrixCalcDirective } from './base/derectives/matrix-calc.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CellLayoutCulcDirective,
    ProductComponent,
    UserDialogComponent,
    PicklistComponent,
    ContentComponent,
    TableWrapperComponent,
    TableHeaderComponent,
    TableHeaderCellComponent,
    TableBodyComponent,
    TableBodyCellComponent,
    TableBodyRowComponent,
    MatrixCalcDirective,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    StoreModule.forRoot(reducers),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    // 3. Initialize
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent],
  entryComponents: [
    UserDialogComponent
 ]
})
export class AppModule  {


}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}