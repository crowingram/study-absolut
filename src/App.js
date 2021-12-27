import React from 'react';
import styled from 'styled-components';

import PrimaryNav from './components/PrimaryNav';
import FullHero from './components/FullHero';

function App() {
	return (
		<div className="App">
			<Background>
				<PrimaryNav />
				<FullHero />
			</Background>
		</div>
	);
}

export default App;

const Background = styled.div`
	height: max(100vh, 750px);
	width: 100vw;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url('./images/background-baratwindow.jpg');
	background-color: gray;
	background-blend-mode: multiply;
`;
