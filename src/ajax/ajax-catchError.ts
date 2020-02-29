import { ajax, AjaxResponse, AjaxError } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const GITHUB_URL = 'https://api.github.com/users?per_page=5'
const getResponse = ({ response }: AjaxResponse) => response
// const errorHandling = (response: Response) => {
//     if (!response.ok) {
//         throw new Error(response.statusText);
//     }
//     return response
// }
const errorHandling = (error: AjaxError) => {
    console.warn(error.response)
    return of([])
}
// const fetchPromise = fetch(GITHUB_URL)
// fetchPromise
//     .then(errorHandling)
//     .then(parseJSON)
//     .then(console.log)
//     .catch(console.warn)

ajax(GITHUB_URL)
    .pipe(
        map(getResponse),
        catchError(errorHandling)
    )
    .subscribe(console.log)



