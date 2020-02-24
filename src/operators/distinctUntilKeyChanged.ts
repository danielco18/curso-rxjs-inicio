import { from } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';

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
        distinctUntilKeyChanged('name') // ! Si es true omite
    )

characters$
    .subscribe(console.log)