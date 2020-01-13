import { Observable, Observer, Subject } from 'rxjs';
// Nota: tener cuidado con los observables <Se tienen que desturir cuando se completen>
const observer: Observer<number> = {
    next: console.log,
    error: console.error,
    complete: () => console.log('Completed'),
};

const interval$ = new Observable<number>(subs => {

    const interval = setInterval(() => subs.next(Math.random()), 1000);

    return () => {
        clearInterval(interval);
        console.log('Destroyed interval');
    }
});


/* 
    1- Casteo múltiple
    2- También es un observer
    3- Next, Error and Complete
*/
const subject$ = new Subject<number>()
const subscription = interval$.subscribe(subject$)

// const subscribe = interval$.subscribe(console.log)
// const subscribeTwo = interval$.subscribe(console.log)

const subscribe = subject$.subscribe(observer)
const subscribeTwo = subject$.subscribe(observer)

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500)

/* 
Cuando la data es producida por el observable en sí mismo, es considerado un Cold Observable. Pero
cuado la data es producida por fuera del observable es considerado un Hot Observable
*/