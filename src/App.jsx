import React from 'react';
import {
	// BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
	useLocation
} from "react-router-dom";
import { About } from './components/About';
import { Users } from './components/Users';
import { Pokemons } from './components/Pokemons';
import { Provider } from 'react-redux';

import generateStore from './redux/store';
import MaterialUi from './components/MaterialUi';
import { ThemeProvider } from '@material-ui/core';
import theme from './configTheme';
import NavBar from './components/NavBar';
import Crud from './components/Crud';
import WrapperNavbar from './components/WrapperNavbar';


const App = ()=> {
	let location = useLocation();
	
	const store = generateStore();
	return (
		<div className="container">
			{
				location.pathname !== '/navbar' && 
				<div className="btn-group mt-5">
					<Link to="/" className="btn btn-dark">Home</Link>
					<Link to="/about" className="btn btn-dark">About Us</Link>
					<Link to="/contact" className="btn btn-dark">Contact</Link>
					<Link to="/pokemons" className="btn btn-dark">Pokemons</Link>
					<Link to="/material-ui" className="btn btn-dark">Material ui</Link>
					<NavLink to="/crud" className="btn btn-dark" activeClassName="active">Crud</NavLink>
					<Link to="/navbar" className="btn btn-dark">NavBar</Link>
				</div>
			}
			<Switch>
				<Route path="/" exact>
					<h2>Home</h2>
				</Route>
				<Route path="/crud">
					<Crud/>
				</Route>
				<Route path="/about/:id">
					<Users/>
				</Route>
				<Route path="/about">
					<About/>
				</Route>
				<Route path="/contact">
					<h2>Contact</h2>
				</Route>
				<Route path="/pokemons">
					<Provider store={store}>
						<Pokemons/>
					</Provider>
				</Route>
				<Route path="/material-ui">
					<ThemeProvider theme={theme}>
						<NavBar/>
						<MaterialUi/>
					</ThemeProvider>
				</Route>
				<Route path="/navbar">
					<ThemeProvider theme={theme}>
						<WrapperNavbar/>
					</ThemeProvider>
				</Route>
			</Switch>
		</div>
	); 
}

export default App;
