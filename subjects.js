/**
 * SUBJECTS : BehaviorSubject, ReplaySubject, AsyncSubject
 * A Subject is like an observable but can be multicast to many Observers.
 * Subjects are like Event Emitters: they maintain a registry of many listeners
 */
import { BehaviorSubject, ReplaySubject, Subject, AsyncSubject } from "rxjs";

//Subjects :
var subject1 = new Subject();

//subscriber 1
subject1.subscribe((res) => {
  console.log("subscriber 1 ", res);
});
//subscriber 2
subject1.subscribe((res) => {
  console.log("subscriber 2 ", res);
});
//subscriber 3
subject1.subscribe((res) => {
  console.log("subscriber 3 ", res);
});

subject1.next(Math.random());

/**
 * BehaviorSubject : It has an initial value and will immediately emit the initial value to any subscriber
 * useful when you want to provide the last known value to new subscribers, such as the current state of an application or
 * the latest data fetched from an API
 */
var behaviorSubject = new BehaviorSubject(100); //default value

behaviorSubject.subscribe((res) => {
  console.log("behaviorSubject subscriber1", res); //will get default or last updated value
});

behaviorSubject.next(200);

behaviorSubject.subscribe((res) => {
  console.log("behaviorSubject subscriber2", res); //will get last updated value
});

/**
 * ReplaySubject: subject that can buffer and replay a specific number of values
 * useful when you want to provide a history of values to new subscribers or
 * when you need to cache values for later use
 */
var replaySubject = new ReplaySubject(2); //buffer size as 2.

replaySubject.next(111);
replaySubject.next(222);
replaySubject.next(333);

replaySubject.subscribe((res) => {
  console.log("replaySubject subscription1 ", res);
});

replaySubject.next(444);

replaySubject.subscribe((res) => {
  console.log("replaySubject subscription2 ", res);
});

/**
 * AsyncSubject: It will not emit any values until the subject’s complete() method is called.
 * When completed, it will emit the last value (if any) to subscribers
 */
const asyncSubject = new AsyncSubject();

asyncSubject.subscribe((res) => {
  console.log('asyncSubject Subscriber1 ', res);
});

asyncSubject.next(111);
asyncSubject.next(222);

asyncSubject.subscribe((res) => {
    console.log('asyncSubject Subscriber2 ', res);
});

asyncSubject.next(333);
asyncSubject.complete();
