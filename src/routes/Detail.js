import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({ toDos }) {
	// console.log(props);
	// console.log(props.toDos[0].id);
	const id = useParams().id;
	console.log(id);
	const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
	console.log(toDo);
	return (
		<>
			<h1>{toDo?.text}</h1>

			<h5>Created at : {toDo?.id}</h5>
		</>
	);
}

function mapStateToProps(state, ownProps) {
	// console.log(state, ownProps);
	return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
