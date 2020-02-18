import { range, from } from "rxjs";
import { filter, map } from "rxjs/operators";

interface Character {
    isHero: boolean;
    name: string;
}

const isOdd = (number: number) => number % 2 === 1
const isHero = ({ isHero }: Character): boolean => isHero
const isVillain = ({ isHero }: Character): boolean => !isHero

const range$ = range(1, 10)
    .pipe(
        filter(isOdd)
    );


range$.subscribe(console.log)


const characters: Character[] = [
    {
        isHero: true,
        name: 'Captain America'
    },
    {
        isHero: true,
        name: 'Ironman'
    },
    {
        isHero: false,
        name: 'Thanos'
    },
]

const characters$ = from(characters);
const heroes$ = characters$
    .pipe(
        filter(isHero),
        map(({ name }) => `${name} is a hero`)
    )

const villains$ = characters$
    .pipe(
        filter(isVillain),
        map(({ name }) => `${name} is a villain`)
    )

heroes$.subscribe(console.log)
villains$.subscribe(console.log)