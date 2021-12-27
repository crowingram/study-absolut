import React from 'react';
import styled from 'styled-components';

import PrimaryNav from './components/PrimaryNav';
import Hero from './components/Hero';

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
					gity
					<div>
						<HeroCTA>
							<HeroCTAHline>
								<span>Discover Elyx</span>
							</HeroCTAHline>
							<HeroCTATline>
								Learn how we make our genuine luxury vodka
							</HeroCTATline>
						</HeroCTA>
					</div>
					<div>
						<HeroCTA>
							<HeroCTAHline>
								<span>World of Elyx</span>
							</HeroCTAHline>
							<HeroCTATline>Experience Elyx and Copper</HeroCTATline>
						</HeroCTA>
					</div>
					<div>
						<HeroCTA>
							<HeroCTAHline>
								<span>The Art of Hospitality</span>
							</HeroCTAHline>
							<HeroCTATline>Luxury Worth Celebrating</HeroCTATline>
						</HeroCTA>
					</div>
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
const HeroCTA = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	height: fit-content;
	margin-top: 4vh;
`;
const HeroCTAHline = styled.header`
	text-align: center;
	text-transform: uppercase;
	color: white;
	font-size: 4.8vw;
	border-bottom: 2px solid #b65e23;
	position: relative;
	padding: 0 20px;
	transform-origin: bottom center;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	width: fit-content;

	span {
		cursor: pointer;
	}

	span:before {
		content: '';
		background-color: #b65e23;
		position: absolute;
		left: 0;
		bottom: 0;
		width: 2px;
		height: 34px;
		transform-origin: bottom center;
		/* font-size: 40px; */
		transform: scaleY(0);
		transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	}

	span:after {
		content: '';
		background-color: #b65e23;
		position: absolute;
		right: 0;
		bottom: 0;
		width: 2px;
		height: 34px;
		transform-origin: bottom center;
		transform: scaleY(0);
		transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	}

	&:hover {
		transform: scale(1.1);
		span:before,
		span:after {
			transform: scaleY(1.1);
		}
	}

	@media screen and (min-width: 650px) {
		font-size: 3.2vw;
	}
	@media screen and (min-width: 775px) {
		font-size: 3vw;
	}
	@media screen and (min-width: 950px) {
		font-size: 2.6vw;
	}
	@media screen and (min-width: 1020px) {
		font-size: 2.5vw;
	}
`;
const HeroCTATline = styled.p`
	text-align: center;
	text-transform: uppercase;
	font-family: Montserrat, sans-serif;
	font-size: 4vw;
	font-weight: 200;
	color: white;
	margin: 5px 40px auto;

	@media screen and (min-width: 650px) {
		font-size: 1.8vw;
	}
	@media screen and (min-width: 775px) {
		font-size: 1.7vw;
	}
	@media screen and (min-width: 950px) {
		font-size: 1.5vw;
	}
	@media screen and (min-width: 1020px) {
		font-size: 1.4vw;
	}
`;
