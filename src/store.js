import { createAction } from '@reduxjs/toolkit';
import { createStore } from 'redux';

// const ADD = 'ADD';
// const DELETE = 'DELETE';

const addToDo = createAction('Add');
const deleteToDo = createAction('Delete');
console.log(addToDo(), deleteToDo());
// const addToDo = (text) => {
// 	return {
// 		type: ADD,
// 		text: text,
// 	};
// };
// const deleteToDo = (id) => {
// 	return {
// 		type: DELETE,
// 		id: id,
// 	};
// };

const reducer = (state = [], action) => {
	console.log(state, action);
	switch (action.type) {
		case addToDo.type:
			return [{ text: action.payload, id: Date.now() }, ...state];
		case deleteToDo.type:
			console.log(action);
			return state.filter((toDo) => toDo.id !== action.payload);
		default:
			return state;
	}
};

export const actionCreators = {
	add: addToDo,
	del: deleteToDo,
};
const store = createStore(reducer);

export default store;
