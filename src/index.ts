import { Observable, Observer } from 'rxjs';


// Observer
const observer: Observer<string> = {
    next: value => console.log(value),
    error: e => console.error(e),
    complete: () => console.log('Completado')
}

// No es muy usado
// const obs$ = Observable.create()

// Subscribers
// Los que están pendientes de las emisiones de un observable
const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // Forzar un error
    // const err = undefined;
    // err.nombre = 'Daniel';
    // subs.error('Esto es un error forzado')



    subs.complete();
    // No emite por que ya se completo
    subs.next('Mundo');
});

// obs$.subscribe(console.log)
// console.log('-------')
// obs$.subscribe(console.log)

// Subscriber
// obs$.subscribe(
//     value => console.log(`next ${value}`),
//     error => console.error(`error: ${error}`),
//     () => console.info('completed')
// );

obs$.subscribe(observer);




