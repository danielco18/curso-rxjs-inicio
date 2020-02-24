import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';

const reducer = (acc: number, curr: number) => acc + curr;

interval(1000)
    .pipe(
        take(5),
        tap(console.log),
        reduce(reducer)
    )
    .subscribe({
        next: val => console.log('next:', val),
        complete: () => console.log('completed')
    })