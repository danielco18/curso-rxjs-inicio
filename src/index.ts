import { Observer } from 'rxjs';

// Observer
const observer: Observer<any> = {
    next: console.log,
    error: console.error,
    complete: () => console.info('Completado')
}
