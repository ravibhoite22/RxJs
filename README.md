# RxJs
Basic concepts of RxJs

SUBJECTS : 
BehaviorSubject, ReplaySubject, AsyncSubjectA Subject is like an observable but can be multicast to many Observers.
Subjects are like Event Emitters: they maintain a registry of many listeners

BehaviorSubject : 
It has an initial value and will immediately emit the initial value to any subscriber
useful when you want to provide the last known value to new subscribers, such as the current state of an application or the latest data fetched from an API
 
ReplaySubject: 
subject that can buffer and replay a specific number of values
useful when you want to provide a history of values to new subscribers or when you need to cache values for later use

AsyncSubject: 
It will not emit any values until the subject’s complete() method is called.
When completed, it will emit the last value (if any) to subscribers

COLD and HOT OBSERVABLES 
When the data is produced by the Observable itself, we call it a cold Observable.
When the data is produced outside the Observable, we call it a hot Observable.

map : This operator is used to transform the data emitted by an observable

filter : This operator is used to filter the data emitted by an observable

mergeMap : This operator is used to merge multiple observables into a single observable

concatMap : This operator is used to flatten an Observable by applying a mapping function to each value, and then concatenating the resulting Observables in the order they were emitted

switchMap: used to handle scenarios where you need to switch to a new observable based on the current value of an observable
