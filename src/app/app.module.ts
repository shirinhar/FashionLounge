import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// added myself
import { QueryHandler } from '../providers/query_handler';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';
import { AddPage }  from '../pages/add/add';
import { DesignersPage }  from '../pages/designers/designers';


@NgModule({
  declarations: [
    MyApp,
    HomePage,

    //some custom things
    TabsPage,
    SearchPage,
    AddPage,
    DesignersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

    //custom things
    TabsPage,
    SearchPage,
    AddPage,
    DesignersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    QueryHandler
  ]
})
export class AppModule {}
