import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// Importamos el hook para usar el contexto
import { useAuthContext } from './hooks/useAuthContext';
// Importamos el componente de redirección

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
	// Obtenemos el usuario y authIsReady del contexto
	const { user, authIsReady } = useAuthContext();

	return (
		<div className='App'>
			{authIsReady && (
				<BrowserRouter>
					<Navbar />
					<Switch>
						<Route exact path='/'>
							{user ? <Home /> : <Redirect to={'/login'}/>}
						</Route>
						<Route path='/signup'>
							{!user ? <Signup /> : <Redirect to={'/'}/>}
						</Route>
						<Route path='/login'>
							{!user ? <Login /> : <Redirect to={'/'}/>}
						</Route>
					</Switch>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
