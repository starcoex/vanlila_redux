import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const reducer = (state = [], action) => {
	console.log(action);
};

const store = createStore(reducer);

const createToDo = (toDo) => {
	const li = document.createElement('li');
	ul.appendChild(li);
	li.innerText = toDo;
};

const handleSubmit = (event) => {
	event.preventDefault();
	const toDo = input.value;
	input.value = '';
	createToDo(toDo);
};

form.addEventListener('submit', handleSubmit);
