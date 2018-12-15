import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HomePage } from '../pages/home/home';
import { ExplorePage } from '../pages/explore/explore';
import { DestinationProvider } from '../providers/destination/destination';
import {FIREBASE_CONFIG} from '../databaseConnection/connectionDetails';
import {LogonPage} from '../pages/logon/logon';
import {RegisterPage} from '../pages/register/register';

@NgModule({
  declarations: [
    MyApp,
    HomePage,ExplorePage,LogonPage,RegisterPage
  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,ExplorePage,LogonPage,RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DestinationProvider
  ]
})
export class AppModule {}
