import { fromEvent } from 'rxjs';
import { sampleTime, map } from 'rxjs/operators';
const getAxes = (({ x, y }) => ({ x, y }))
const click$ = fromEvent<MouseEvent>(document, 'click');


click$
    .pipe(
        sampleTime(2000),
        map(getAxes),
    )
    .subscribe(console.log)