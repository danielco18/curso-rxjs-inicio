import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

interface Login {
    email: string;
    password: string;
}

const sendLoginRequest = (login: Login) => ajax
    .post('https://reqres.in/api/login?delay=1', login)
    .pipe(
        pluck('response', 'token'),
        catchError(error => of(''))
    )


const form = document.createElement('form')
const inputEmail = document.createElement('input')
const inputPass = document.createElement('input')
const submitButton = document.createElement('button')


inputEmail.type = 'email'
inputEmail.placeholder = 'Email'
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password'
inputPass.placeholder = 'Password'
inputPass.value = 'cityslicka';

submitButton.innerHTML = 'Login'

form.append(inputEmail, inputPass, submitButton)

document.querySelector('body').append(form)

const submitForm$ = fromEvent(form, 'submit').pipe(
    tap((e) => e.preventDefault()),
    map(({ target }) => ({
        email: target[0].value,
        password: target[1].value,
    })),
    mergeMap(sendLoginRequest),
);


submitForm$.subscribe(console.log)