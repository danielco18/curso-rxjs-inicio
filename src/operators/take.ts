import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5)

numbers$
    .pipe(
        tap(t => console.log({ t })),
        take(2)
    )
    .subscribe({
        next: console.log,
        complete: () => console.log('completed')
    })