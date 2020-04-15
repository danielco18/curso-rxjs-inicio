import { from } from 'rxjs';
import { filter, reduce, map } from 'rxjs/operators';

/**
 * Ejercicio:
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 *
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

(() => {
    const sumValues = (prev: number, curr: number) => prev + curr;
    const isNotNaN = (number: number | string): boolean => !isNaN(+number);
    const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

    from(datos).pipe(filter<any>(isNotNaN), reduce(sumValues)).subscribe(console.log); // La salida debe de ser 32
})();
