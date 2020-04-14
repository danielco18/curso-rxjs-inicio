import { of } from 'rxjs';
import { endWith } from 'rxjs/operators';

const numbers$ = of(1, 2, 3)

numbers$
    .pipe(
        endWith('a')
    )
    .subscribe(console.log)