import { interval, fromEvent } from 'rxjs';
import { switchMap, take, concatMap } from 'rxjs/operators';

const interval$ = interval(1000);
const click$ = fromEvent(document, 'click');

click$.pipe(concatMap((_) => interval$.pipe(take(3)))).subscribe(console.log);
