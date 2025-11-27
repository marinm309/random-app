import { Route, Routes, Navigate } from 'react-router-dom';
import { ClientContext, client } from './context/clientContext.js';

import { useState, useEffect } from 'react'

import Header from './components/header/Header.jsx';

function App() {

	const [ currentUser, setCurrentUser ] = useState(false)
	const [ profileInfo, setProfileInfo ] = useState()
	const [ csrfToken, setCsrfToken ] = useState('')
	const [ loading, setLoading ] = useState(true)


	useEffect(() => {
		client.get("/users/user")
		.then((res) => {
			if (res.data.message === 'No user is logged in.') {
				setCurrentUser(false);
				setLoading(false);
			} else {
				setProfileInfo(res);
				setCurrentUser(true);
				setCsrfToken(res.data.csrf_token);
				setLoading(false);
			}
		})
		.catch((error) => {
			setCurrentUser(false);
			setLoading(false);
		});
	}, [currentUser]);
	

	if (loading) {
		return <div>LOADING</div>;
	}


	return (
		<ClientContext.Provider value={{
			client: client,
			currentUser: currentUser,
			setCurrentUser: setCurrentUser,
			profileInfo: profileInfo,
			setProfileInfo: setProfileInfo,
			csrfToken: csrfToken,
			}}>

			<Header />
			
			<Routes>
				<Route path="/" element={<div>HOME</div>} />
			</Routes>

		</ClientContext.Provider>
	)
}

export default App
