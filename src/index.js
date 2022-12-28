import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addToDo = (toDo) => {
	return { type: ADD_TODO, text: toDo };
};
const deleteToDo = (id) => {
	return { type: DELETE_TODO, text: id };
};

const reducer = (state = [], action) => {
	console.log(action);
	switch (action.type) {
		case ADD_TODO:
			return [{ text: action.text, id: Date.now() }, ...state];
		case DELETE_TODO:
			console.log(state);
			return state.filter((e) => e.id !== action.text);
		default:
			return state;
	}
};

const store = createStore(reducer);
// store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (toDo) => {
	store.dispatch(addToDo(toDo));
};
const dispatchdeleteToDo = (event) => {
	const id = parseInt(event.target.parentNode.id);
	store.dispatch(deleteToDo(id));
};
const paintToDos = () => {
	ul.innerHTML = '';
	const toDos = store.getState();
	toDos.forEach((toDo) => {
		const li = document.createElement('li');
		const button = document.createElement('button');
		button.innerText = 'Button';
		button.addEventListener('click', dispatchdeleteToDo);
		li.id = toDo.id;
		li.innerText = toDo.text;
		li.appendChild(button);
		ul.appendChild(li);
	});
};
store.subscribe(paintToDos);

const handleSubmit = (event) => {
	event.preventDefault();
	const toDo = input.value;
	input.value = '';
	dispatchAddToDo(toDo);
};

form.addEventListener('submit', handleSubmit);
