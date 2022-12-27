import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countModifier = (count = 0, action) => {
	console.log(count, action);
	if (action.type === 'Add') {
		return (count = count + 1);
	} else if (action.type === 'Minus') {
		return (count = count - 1);
	} else {
		return count;
	}
	// return count;
};

const countStore = createStore(countModifier);
countStore.dispatch({ type: 'Add' });
countStore.dispatch({ type: 'Add' });
countStore.dispatch({ type: 'Add' });
countStore.dispatch({ type: 'Add' });
countStore.dispatch({ type: 'Minus' });

console.log(countStore.getState());
