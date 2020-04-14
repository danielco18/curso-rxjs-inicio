import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';

const numbers$ = of(1, 2, 3);

numbers$.pipe(startWith('a')).subscribe(console.log);
