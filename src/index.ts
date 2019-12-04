import { Observable } from 'rxjs';

// No es muy usado
// const obs$ = Observable.create()

// Subscribers
// Los que están pendientes de las emisiones de un observable
const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');
    
    subs.complete();
    // No emite por que ya se completo
    subs.next('Mundo');
});

obs$.subscribe(console.log)
console.log('-------')
obs$.subscribe(console.log)




