import { of, interval, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5);
const interval$ = interval(1000).pipe(take(3));
const letters$ = of('a', 'b', 'c', 'd').pipe(delay(3500));

forkJoin(numbers$, interval$, letters$).subscribe(console.log);
