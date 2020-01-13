import { Observable, Observer } from 'rxjs';

const observer: Observer<number> = {
    next: console.log,
    error: console.error,
    complete: () => console.log('Completed'),
};

const interval$ = new Observable<number>(subs => {
    let iterator = 0;
    const interval = setInterval(() => {
        iterator++;
        subs.next(iterator)
    }, 1000)

    setInterval(() => {
        subs.complete()
    }, 2500)

    return () => {
        clearInterval(interval);
        console.log('Destroyed interval');
    }
})

const subscription = interval$.subscribe(observer);
const subscriptionTwo = interval$.subscribe(observer);
const subscriptionThree = interval$.subscribe(observer);

subscription
    .add(subscriptionTwo)
    .add(subscriptionThree);

setTimeout(() => {
    subscription.unsubscribe();

    console.log('Clear by timeout');
}, 6000)