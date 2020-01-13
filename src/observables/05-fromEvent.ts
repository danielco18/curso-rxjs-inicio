import { fromEvent, Observer } from 'rxjs';

// Observer
const observer: Observer<any> = {
    next: console.log,
    error: console.error,
    complete: () => console.info('Completado')
}
// Eventos del DOM

const click$ = fromEvent<MouseEvent>(document, 'click')
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')

click$.subscribe(({x, y}) => {
    console.log( x, y );
})
keyup$.subscribe( ({ key }) => console.log(`You pressed ${key}`))