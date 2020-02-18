import { range, pipe, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// const range$ = range(1, 5)


// range$
//     .pipe(
//         map(n => n * 10)
//     )
// .subscribe(console.log)


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$
    .pipe(
        map(({ code }) => code)
    )

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
)

const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionado')
)
    
keyupCode$.subscribe(code => console.log('map', code))
keyupPluck$.subscribe(code => console.log('pluck', code))
keyupMapTo$.subscribe(code => console.log('mapTo', code))