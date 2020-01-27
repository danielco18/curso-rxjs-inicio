import { Observer, of, from } from 'rxjs';


// of = toma argumentos y genera una secuencia
// from = array, promise, iterable, observable

// Observer
const observer: Observer<any> = {
    next: console.log,
    error: console.error,
    complete: () => console.info('Completado')
}

const generator = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const iterable = generator();

from(iterable).subscribe(observer)


// const src$ = from([1, 2, 3, 4, 5])
// const src$ = of(...[1, 2, 3, 4, 5])
// const src$ = from('Daniel')
// const src$ = from(fetch('https://api.github.com/users/danielco18'))

// src$.subscribe(async resp => {
//     const data = await resp.json()
//     console.log(data);
// })
// src$.subscribe(observer)