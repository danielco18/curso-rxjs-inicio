import { range, fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

// const range$ = range(1, 5)


// range$
//     .pipe(
//         map(n => n * 10)
//     )
// .subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
)

keyupPluck$.subscribe(code => console.log('pluck', code))
