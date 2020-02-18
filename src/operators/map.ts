import { range, pipe, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

// const range$ = range(1, 5)


// range$
//     .pipe(
//         map(n => n * 10)
//     )
// .subscribe(console.log)


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$
    .pipe(
        map(event => event.code)
    )

keyupCode$.subscribe(code => console.log('map', code))