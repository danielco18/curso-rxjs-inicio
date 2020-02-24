import { from } from 'rxjs'
import { reduce, scan, map } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5]

const reducer = (acc: number, curr: number) => acc + curr

// Reduce
from(numbers)
    .pipe(
        reduce(reducer)
    )
    .subscribe(console.log)

// Scan
from(numbers)
    .pipe(
        scan(reducer)
    )
    .subscribe(console.log)

// Redux
interface User {
    id?: string;
    authenticated?: boolean;
    token?: string;
    age?: number
}

const users: User[] = [
    { id: 'Dan', authenticated: false, token: null },
    { id: 'Dan', authenticated: true, token: 'xwas' },
    { id: 'Dan', authenticated: true, token: 'wasqx123' },
]

const state$ = from(users).pipe(
    scan<User>((acc, curr) => ({ ...acc, ...curr }), { age: 21 })
)

state$.subscribe(console.log)