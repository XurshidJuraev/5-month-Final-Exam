import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './Page/Home/Home';
import Profile from './Page/Profile/Profile';
import Video from './Page/Video/Video';

function AuthenticatedApp() {
	return (
		<>
			{/* <Home /> */}
			<main>
				<Routes>
					<Route path='' element={<Home />} />
					<Route path='channel/:id' element={<Profile />} />
					<Route path='video/:id' element={<Video />} />
				</Routes>
			</main>
		</>
	);
}

export default AuthenticatedApp;
