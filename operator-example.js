import { map, filter, find, findIndex, mergeMap, concatMap, switchMap } from "rxjs/operators";
import { of } from "rxjs";

let observable = of(1, 2, 3, 4);

//map : This operator is used to transform the data emitted by an observable
observable.pipe(map((data) => data + 1)).subscribe((res) => {
  console.log("map ",res);
});

//filter : This operator is used to filter the data emitted by an observable
observable.pipe(filter(data => data > 2)).subscribe((res) => {
    console.log("Filter ",res);
});

//mergeMap : This operator is used to merge multiple observables into a single observable
let observable2 = of('a','b','c','d');
observable.pipe(mergeMap(value => observable2.pipe(map(value2 => value+value2)))).subscribe((res)=>{
  console.log(res);
});

//concat : This operator is used to flatten an Observable by applying a mapping function to each value, and then concatenating the resulting Observables in the order they were emitted
observable.pipe(concatMap(value => "API"+"+"+value)).subscribe((res)=>{
  console.log(res);
});

//switchMap: used to handle scenarios where you need to switch to a new observable based on the current value of an observable
