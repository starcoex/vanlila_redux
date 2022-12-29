import { useState } from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import { actionCreators } from '../store';

function Home({ toDos, addToDo, ...rest }) {
	// console.log(toDos, rest);

	const [text, setText] = useState('');
	function onChange(event) {
		const value = event.target.value;
		setText(value);
	}
	function onSubmit(event) {
		event.preventDefault();
		addToDo(text);
		setText('');
		// props.dispatch(addToDo(text));
	}
	return (
		<>
			<h1>To Do</h1>
			<form onSubmit={onSubmit}>
				<input type='text' value={text} onChange={onChange} />
				<button>Add</button>
			</form>
			<ul>
				{toDos.map((toDo) => (
					<ToDo {...toDo} key={toDo.id} />
				))}
			</ul>
		</>
	);
}

function mapStateToProps(state, ownProps) {
	// console.log(state, ownProps);
	return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
	// console.log(dispatch, ownProps);
	return {
		addToDo: (text) => dispatch(actionCreators.add(text)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
