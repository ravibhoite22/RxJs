/**
 * COLD and HOT OBSERVABLES
 * When the data is produced by the Observable itself, we call it a cold Observable.
 * When the data is produced outside the Observable, we call it a hot Observable.
 */
import { Observable } from "rxjs";

//cold observable : produce data inside observable like math.random
var coldObs = new Observable((observer) => {
  observer.next(Math.random()); //inside observable
});

//subscriber1
coldObs.subscribe((res) => {
  console.log("Cold subscriber1 ", res);
});

//subscriber1
coldObs.subscribe((res) => {
  console.log("Cold subscriber2 ", res); //will get different vale then sub1
});

//Hot observable : produce data out side observable
var data = Math.random(); //outside of observable
var hotObs = new Observable((observer) => {
  observer.next(data);
});

//subscriber1
hotObs.subscribe((res) => {
  console.log("hot subscriber1 ", res);
});

//subscriber1
hotObs.subscribe((res) => {
  console.log("hot subscriber2 ", res); //will get same vale as sub1
});
