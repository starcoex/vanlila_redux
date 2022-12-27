import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');
number.innerText = 0;

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

const onChange = () => {
	number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

add.addEventListener('click', () => countStore.dispatch({ type: 'Add' }));
minus.addEventListener('click', () => countStore.dispatch({ type: 'Minus' }));
