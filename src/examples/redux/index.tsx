import actions from './Actions';
import store from './Store';

console.log('defaultStateFirst:' + store.getState()['First'])
console.log('defaultStateSecond:' + store.getState()['Second'])
console.log('defaultStateThird:' + store.getState()['Third'])

store.subscribe(() => {
    console.log('First:' + store.getState()['First'])
    console.log('Second:' + store.getState()['Second'])
    console.log('Third:' + store.getState()['Third'])
});

export default function test() { store.dispatch(actions.decrement({ caption: 'First', count: 5 })) }