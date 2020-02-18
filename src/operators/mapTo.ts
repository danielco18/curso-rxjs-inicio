import { range, pipe, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// const range$ = range(1, 5)


// range$
//     .pipe(
//         map(n => n * 10)
//     )
// .subscribe(console.log)


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionado')
)

keyupMapTo$.subscribe(code => console.log('mapTo', code))