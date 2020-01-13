import { of, Observer } from 'rxjs';

// Observer
const observer: Observer<number> = {
    next: console.log,
    error: console.error,
    complete: () => console.info('Completado')
}


const obs$ = of<number>(1,2,3,4,5,6);

// const obs$ = of<any>([1,2], { a: 1, b: 2}, function(){}, true, Promise.resolve(true));

console.log('Started');
obs$.subscribe(observer)
console.log('Ended');