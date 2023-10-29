import { Observable } from "rxjs";

const ob1 = new Observable((observer) => {
    //fetch('http://localhost:3000/getUser').then(response => response.json()).then(data => observer.next(data));
    observer.next("ob1 emitted")
})

ob1.subscribe(res =>{
    console.log(res);
})

