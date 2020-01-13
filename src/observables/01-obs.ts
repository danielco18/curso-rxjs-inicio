import { Observable, Observer } from 'rxjs';


// Observer
const observer: Observer<string> = {
    next: console.log,
    error: console.error,
    complete: () => console.info('Completado')
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

// Subscribe by a Subscription (Callbacks)
// obs$.subscribe(
//     value => console.log(`next ${value}`),
//     error => console.error(`error: ${error}`),
//     () => console.info('completed')
// );

obs$.subscribe(observer);




