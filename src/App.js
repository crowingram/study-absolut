import React from 'react';
import styled from 'styled-components';

import PrimaryNav from './components/PrimaryNav';
import Hero from './components/Hero';
import HeroCTA from './components/HeroCTA';

function App() {
	return (
		<div className="App">
			<Background>
				<PrimaryNav />
				<Hero
					headline="The Story of Absolut&nbsp;Elyx"
					tagline="Single Estate Copper Crafted Luxury&nbsp;Vodka"
				/>
				<HeroCTAContainer>
					<HeroCTA
						headline="Discover Elyx"
						tagline="Learn how we make our genuine luxury vodka"
					></HeroCTA>
					<HeroCTA
						headline="World of Elyx"
						tagline="Experience Elyx and Copper"
					></HeroCTA>
					<HeroCTA
						headline="The Art of Hospitality"
						tagline="Luxury Worth Celebrating"
					></HeroCTA>
				</HeroCTAContainer>
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
const HeroCTAContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 25vh;
	width: 100vw;

	@media screen and (max-width: 725px) {
		padding-top: 20vw;
	}
	@media screen and (min-width: 726px) {
		padding-top: 18vw;
	}
	@media screen and (min-width: 770px) {
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 97vw;
		padding-top: 7vw;
	}

	@media screen and (min-width: 900px) {
		padding-top: 4vh;
	}
	@media screen and (min-width: 1000px) {
		padding-top: 0;
	}
`;
