import { fromEvent } from 'rxjs';
import { take, first } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click')

click$
    .pipe(
        first(({ clientY }) => clientY >= 150)
    )
    .subscribe({
        next: value => console.log('next:', value),
        complete: () => console.log('completed')
    })