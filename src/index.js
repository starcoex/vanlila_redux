import { legacy_createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

let counter = 0;
number.innerText = counter;

const update = () => {
	number.innerText = counter;
};

const handleClick = () => {
	counter = counter + 1;
	update();
};
const handleMinus = () => {
	counter = counter - 1;
	update();
};

add.addEventListener('click', handleClick);
minus.addEventListener('click', handleMinus);
