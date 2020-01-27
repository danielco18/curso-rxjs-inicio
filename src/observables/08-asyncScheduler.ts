import { Observer, asyncScheduler } from 'rxjs';

// Observer
const observer: Observer<any> = {
    next: console.log,
    error: console.error,
    complete: () => console.info('Completado')
}

// const greeting = () => console.log('Hello World!!');
// const newGreeting = (name: string) => console.log(`Hello ${name}!! `);

// asyncScheduler.schedule(greeting, 2000)
// asyncScheduler.schedule(newGreeting, 2000, 'Daniel')

const subs = asyncScheduler.schedule(function(state) {
    console.log('state', state);

    this.schedule(state + 1, 1000)
}, 2000, 0)


// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000)


asyncScheduler.schedule(() => subs.unsubscribe(), 6000)