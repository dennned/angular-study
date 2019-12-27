import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {interval, Subscription} from 'rxjs'

import {AppComponent} from './app.component'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  sub:Subscription

  constructor() {
    const inervalStream$ = interval(1000);

    this.sub = inervalStream$.subscribe((value) => {
      console.log(value);
    });
  }

  stop() {
    this.sub.unsubscribe();
  }

}
