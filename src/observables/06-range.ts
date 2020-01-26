import { Observer, range, asyncScheduler } from 'rxjs';

// Observer
const observer: Observer<any> = {
    next: console.log,
    error: console.error,
    complete: () => console.info('Completado')
}

// const src$ = of(1, 2, 3, 4, 5)
const src$ = range(1, 5, asyncScheduler)

console.log('Started');
src$.subscribe(observer);
console.log('Ended')