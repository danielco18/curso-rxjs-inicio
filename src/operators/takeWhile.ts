import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
    .pipe(
        map(({ x, y }) => ({ x, y })),
        takeWhile(({ y }) => y <= 150, true) // * Si el parámetro inclusive es true emite el elemento que hizo completar el observable
    )
    .subscribe({
        next: console.log,
        complete: () => console.log('completed')
    })