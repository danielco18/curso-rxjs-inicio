import { fromEvent, combineLatest } from 'rxjs';
import { pluck } from 'rxjs/operators';
const keyUp$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

combineLatest(keyUp$.pipe(pluck('type')), click$.pipe(pluck('type'))).subscribe(console.log);
