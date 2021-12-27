import React from 'react';
import styled from 'styled-components';
import { BiSearch, BiMenu } from 'react-icons/bi';

import Logo from './components/Logo';
import LeftMenu from './components/LeftMenu';
import LeftMenuWide from './components/LeftMenuWide';

function App() {
	return (
		<div className="App">
			<RightMenuLinks>
				<ul>
					<li>Absolut Elyx Vodka</li>
					<li>
						Discover Elyx
						<ul>
							<li>
								True Luxury
								<ul>
									<li>Single Estate</li>
									<li>Copper Crafted</li>
									<li>Luxury Vodka</li>
								</ul>
							</li>
							<li>
								Finest Ingredients
								<ul>
									<li>Wheat</li>
									<li>Water</li>
									<li>Water for People</li>
								</ul>
							</li>
							<li>
								Finest Craft
								<ul>
									<li>Distillation</li>
									<li>Production</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						The Art of Hospitality
						<ul>
							<li>
								Elyx Experience
								<ul>
									<li>Hospitality Perfected</li>
									<li>Our Guests</li>
								</ul>
							</li>
							<li>
								Elyx around the World
								<ul>
									<li>Spotlights</li>
									<li>Proof of Quality</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						World of Elyx
						<ul>
							<li>Elyx Cocktails</li>
							<li>The Martini</li>
							<li>
								Copper Universe
								<ul>
									<li>Absolut Elyx Boutique</li>
									<li>#CopperMakesItBetter</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</RightMenuLinks>
			<Background>
				<PrimaryNav>
					<LeftMenu />
					<Logo />
					<LeftMenuWide />
					<RightMenu>
						<Search>
							<BiSearch />
						</Search>
						<Menu>
							<BiMenu />
						</Menu>
					</RightMenu>
				</PrimaryNav>
				<Hero>
					<Headline>The Story of Absolut Elyx</Headline>
					<Tagline>Single Estate Copper Crafted Luxury Vodka</Tagline>
				</Hero>
				<HeroCTAContainer>
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
const PrimaryNav = styled.nav`
	width: 100vw;
	display: flex;
	justify-content: space-between;
	position: relative;
	color: #b65e23;
	background-color: white;
	height: 57px;
	@media screen and (min-width: 770px) {
		background-image: none;
		flex-wrap: wrap;
		height: 120px;
	}
	@media screen and (min-width: 985px) {
		flex-wrap: nowrap;
		height: 70px;
	}
	@media screen and (min-width: 1030px) {
		background-color: transparent;
		color: white;
	}
`;
const RightMenu = styled.section`
	display: flex;
	align-items: center;
	padding: 10px 25px;
	width: 100px;

	@media screen and (min-width: 770px) {
		flex-direction: column;
		width: 30px;
		margin: 25px 25px;
		padding: 0;
	}

	@media screen and (min-width: 965px) {
		flex-direction: row;
		width: 100px;
		padding: 10px 25px;
		margin: 0;
	}
`;
const RightMenuLinks = styled.nav`
	display: none;
	background-color: white;
	text-decoration: none;
	text-transform: uppercase;
	color: #b65e23;
	height: max(100vh, 750px);
	width: 100vw;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	z-index: 10;

	ul {
		list-type: none;
	}
`;
const Search = styled.div`
	font-size: 20px;
	cursor: pointer;
`;
const Menu = styled.div`
	font-size: 36px;
	cursor: pointer;
`;
const Hero = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 40vw;
	width: 100vw;
	margin-bottom: 40px;

	@media screen and (max-width: 735px) {
		height: 45vw;
	}

	@media screen and (min-width: 1020px) {
		height: 400px;
	}
`;
const Headline = styled.header`
	text-align: center;
	font-size: 8vw;
	line-height: 10vw;
	font-weight: 700;
	margin-left: 65px;
	margin-right: 65px;
	color: white;
	text-transform: uppercase;
	width: calc(100vw - 150px);

	@media screen and (min-width 310px) {
		font-size: 10vw;
	}

	@media screen and (min-width: 1020px) {
		font-size: 100px;
		line-height: 100px;
	}
`;
const Tagline = styled.p`
	text-align: center;
	font-size: 5vw;
	line-height: 6.5vw;
	font-weight: 300px;
	color: white;
	text-transform: uppercase;

	@media screen and (min-width 310px) {
		font-size: 5.75vw;
	}
	@media screen and (min-width: 1020px) {
		font-size: 40px;
		line-height: 50px;
	}
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
