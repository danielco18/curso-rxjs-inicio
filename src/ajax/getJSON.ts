import { ajax } from 'rxjs/ajax';

// const GITHUB_URL = 'https://api.github.com/users?per_page=5'
const SERVICE_URL = 'https://httpbin.org/delay/1'

const obs$ = ajax.getJSON(SERVICE_URL, {
    'Content-Type': 'application/json'
})

obs$.subscribe(console.log)