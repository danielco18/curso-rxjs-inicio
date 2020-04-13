import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll, mergeMap, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { IGithubUsers, IGithubUserResponse } from '../interfaces/IGithubUsers';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

// Helpers

const showUsers = (users: IGithubUsers[]) => {
    console.log(users);
    orderList.innerHTML = '';
    for (const user of users) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;
        const link = document.createElement('a');
        link.text = 'Website';
        link.href = user.html_url;
        link.target = '_blank';
        li.append(img);
        li.append(user.login + ' ');
        li.append(link);
        orderList.append(li);
    }
};

body.append(textInput, orderList);

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    mergeMap<string, Observable<IGithubUserResponse>>((user) =>
        ajax.getJSON(`https://api.github.com/search/users?q=${user}`),
    ),
    pluck<IGithubUserResponse, IGithubUsers[]>('items'),
); //.subscribe(showUsers);

const URL = 'https://httpbin.org/delay/1?arg=';

input$
    .pipe(
        pluck<KeyboardEvent, string>('target', 'value'),
        switchMap((text) => ajax.getJSON(`${URL}${text}`)),
    )
    .subscribe(console.log);
