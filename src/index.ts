import { Observer, interval, timer } from 'rxjs';

const currentDate = new Date;
currentDate.setSeconds(currentDate.getSeconds() + 5);

// Observer
const observer: Observer<any> = {
    next: console.log,
    error: console.error,
    complete: () => console.info('Completado')
}

const interval$ = interval(1000)
// const timer$ = timer(2000, 1000)
const timer$ = timer(currentDate)

console.log('Async by default (interval/timer)');
// interval$.subscribe(observer)


timer$.subscribe(observer)
console.log('...Ended...')