import {Component} from '@angular/core'
import {Subscription, Subject} from 'rxjs'
// import {Subscription, Observable} from 'rxjs'
// import {interval, Subscription} from 'rxjs'
// import {map, filter, switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sub: Subscription

  // constructor() {
  //
  //   const intervalStream$ = interval(1000)
  //
  //   this.sub = intervalStream$
  //       .pipe(
  //           switchMap(()=> interval(500)),
  //           filter(value => value%2 ===0),
  //           map((value)=>'mapped value ${value}')
  //       )
  //       .subscribe((value) => {
  //         console.log(value)
  //       })
  //
  // }
  //
  // stop() {
  //   this.sub.unsubscribe()
  // }

  // constructor() {
  //   const stream$ = new Observable(observer => {
  //     setTimeout( () => {
  //       observer.next(1)
  //     }, 1500)
  //
  //     setTimeout( () => {
  //       observer.error('Error')
  //     }, 2000)
  //
  //     setTimeout( () => {
  //       observer.next(2)
  //     }, 1500)
  //
  //   });
  //
  //   this.sub = stream$
  //       .subscribe(
  //       value => console.log('NEXT: ',value),
  //           error => 'Error',
  //           () => 'Compele'
  //       )
  // }

  stream$: Subject<void> = new Subject<void>();

  constructor() {
    this.sub = this.stream$.subscribe( value => {
      console.log()
    })

  }

  stop() {
      this.sub.unsubscribe()
  }
  next() {
    this.stream$.next();
  }

}

