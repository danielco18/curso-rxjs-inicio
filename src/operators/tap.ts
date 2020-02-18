import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numbers$ = range(1, 5)
    .pipe(
        tap(n => console.log('tap1', n)),
        map(n => n * 10),
        tap({
            next: val => console.log(val),
            complete: () => console.log('is ova')
        })
    )

numbers$.subscribe(val => console.log('subs', val))