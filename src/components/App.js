import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	NavLink,
	BrowserRouter,
	Routes,
} from 'react-router-dom';
import Detail from '../routes/Detail';
import Home from '../routes/Home';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' exact element={<Home />}></Route>
				<Route path='/:id' exact element={<Detail />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
