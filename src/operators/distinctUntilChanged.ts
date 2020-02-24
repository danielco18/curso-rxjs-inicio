import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';


const numbers$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1)

numbers$
    .pipe(
        distinctUntilChanged()
    )
    .subscribe(console.log)

interface Character {
    name: string;
}


const characters: Character[] = [
    { name: 'Megaman' },
    { name: 'X' },
    { name: 'X' },
    { name: 'Z' },
    { name: 'Z' },
    { name: 'Dr. Willy' },
    { name: 'X' },
    { name: 'Megaman' },
    { name: 'Megaman' },
    { name: 'Zero' },
    { name: 'Megaman' },
]


const characters$ = from(characters)
    .pipe(
        distinctUntilChanged(({ name: previous }, { name: current }) => previous === current) // ! Si es true omite
    )

characters$
    .subscribe(console.log)