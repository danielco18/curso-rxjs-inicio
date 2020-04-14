import { interval, fromEvent } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';

const interval$ = interval(1000);
const click$ = fromEvent(document, 'click');

click$.pipe(exhaustMap((_) => interval$.pipe(take(3)))).subscribe(console.log);
