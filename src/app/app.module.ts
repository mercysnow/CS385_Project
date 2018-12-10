import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuestionsPage } from '../pages/questions/questions';
import { ResultsPage } from '../pages/results/results';
import { ResultDetailsPage} from '../pages/result-details/result-details';
import { FormsModule } from '@angular/forms';
import { ResultsListProvider } from '../providers/results-list/results-list';
import { UserResultsProvider } from '../providers/user-results/user-results';
import { SavedPage } from '../pages/saved/saved';
import {AccordianComponent} from '../components/accordian/accordian';

@NgModule({
  declarations: [
    MyApp,
    HomePage, QuestionsPage, ResultsPage, ResultDetailsPage, SavedPage,
    AccordianComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuestionsPage,
    ResultsPage,
    SavedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ResultsListProvider,
    UserResultsProvider,
    
  ]
})
export class AppModule {}
