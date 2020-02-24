import { interval, fromEvent } from 'rxjs'
import { takeUntil, skip } from 'rxjs/operators';

const btn = document.createElement('button')

btn.innerHTML = 'STOP TIMER'


document.querySelector('body').append(btn)

const counter$ = interval(1000);

const clickBtn$ = fromEvent(btn, 'click')
    .pipe(
        skip(1)
    );


counter$
    .pipe(
        takeUntil(clickBtn$)
    )
    .subscribe({
        next: val => console.log('next: ', val),
        complete: () => console.log('completed')
    })
