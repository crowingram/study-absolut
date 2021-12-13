import React from 'react';
import styled from 'styled-components';
import { BiSearch, BiMenu } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './App.css';

function App() {
	return (
		<div className="App">
			<Background>
				<PrimaryNav>
					<LeftMenu>
						<FaShoppingCart />
						<MdKeyboardArrowDown />
					</LeftMenu>
					<LeftLogoNarrow>
						<img
							src="./images/logo-elyx-copper-bar.png"
							width="215"
							height="55"
							alt=""
						/>
					</LeftLogoNarrow>
					<LeftLogoWide>
						<img
							src="./images/logo-elyx-white.png"
							width="215"
							height="55"
							alt=""
						/>
					</LeftLogoWide>
					<LeftMenuWide>
						<a href="/">Find Elyx</a>
						<a href="/">Buy Elyx</a>
						<a href="/">Absolut Elyx Boutique</a>
						<a href="/">Cocktails</a>
						<a href="/">Discover Elyx</a>
					</LeftMenuWide>
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
					<HeroCTA>
						<HeroCTAHline>
							<span>Discover Elyx</span>
						</HeroCTAHline>
						<HeroCTATline>
							Learn how we make our genuine luxury vodka
						</HeroCTATline>
					</HeroCTA>
					<HeroCTA>
						<HeroCTAHline>
							<span>World of Elyx</span>
						</HeroCTAHline>
						<HeroCTATline>Experience Elyx and Copper</HeroCTATline>
					</HeroCTA>
					<HeroCTA>
						<HeroCTAHline>
							<span>The Art of Hospitality</span>
						</HeroCTAHline>
						<HeroCTATline>Luxury Worth Celebrating</HeroCTATline>
					</HeroCTA>
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
const PrimaryNav = styled.div`
	width: 100vw;
	display: flex;
	justify-content: space-between;
	position: relative;
	color: #b65e23;
	background-color: white;
	height: 57px;
	background-image: url('./images/logo-elyx-copper.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: 200px 28px;
	@media screen and (min-width: 770px) {
		background-image: none;
		flex-wrap: wrap;
		height: 120px;
	}
	@media screen and (min-width: 965px) {
		flex-wrap: nowrap;
		height: 70px;
	}
	@media screen and (min-width: 1030px) {
		background-color: transparent;
		color: white;
	}
`;
const LeftMenu = styled.div`
	display: flex;
	align-items: center;
	padding: 10px 25px;
	width: 85vw;
	font-size: 18px;
	@media screen and (min-width: 770px) {
		display: none;
	}
`;
const LeftLogoNarrow = styled.div`
	display: none;
	@media screen and (min-width: 770px) {
		display: block;
		margin: 8px 25px;
	}
	@media screen and (min-width: 1030px) {
		display: none;
		margin: 0;
	}
`;
const LeftLogoWide = styled.div`
	display: none;
	@media screen and (min-width: 1030px) {
		display: block;
		margin: 8px 25px;
	}
`;
const LeftMenuWide = styled.div`
	display: flex;
	align-items: center;
	margin: 10px 8px;
	position: absolute;
	top: 60px;
	font-size: 18px;

	a {
		display: none;
	}
	@media screen and (min-width: 770px) {
		a {
			display: flex;
			margin-left: 30px;
			text-decoration: none;
			text-transform: uppercase;
			color: #b65e23;

			&:first-of-type {
				margin-left: 20px;
			}
		}
	}
	@media screen and (min-width: 965px) {
		top: 10px;
		left: 235px;
	}
	@media screen and (min-width: 1030px) {
		a {
			color: white;
		}
	}
`;
const RightMenu = styled.div`
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
const Search = styled.div`
	font-size: 20px;
	cursor: pointer;
`;
const Menu = styled.div`
	font-size: 36px;
	cursor: pointer;
`;
const Hero = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 40vw;
	width: 100vw;
	margin-bottom: 40px;

	@media screen and (min-width: 1020px) {
		height: 400px;
	}
`;
const Headline = styled.div`
	text-align: center;
	font-size: 10vw;
	line-height: 10vw;
	font-weight: 700;
	margin-left: 75px;
	margin-right: 75px;
	color: white;
	text-transform: uppercase;

	@media screen and (min-width: 1020px) {
		font-size: 100px;
		line-height: 100px;
	}
`;
const Tagline = styled.div`
	text-align: center;
	font-size: 5.75vw;
	line-height: 6.5vw;
	font-weight: 300px;
	color: white;
	text-transform: uppercase;
	@media screen and (min-width: 1020px) {
		font-size: 40px;
		line-height: 50px;
	}
`;
const HeroCTAContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 25vh;
	width: 97vw;

	@media screen and (max-width: 725px) {
		padding-top: 40vw;
	}
	@media screen and (min-width: 726px) {
		padding-top: 18vw;
	}
	@media screen and (min-width: 780px) {
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding-top: 10vw;
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
	width: 75vw;
	margin-top: 40px;
`;
const HeroCTAHline = styled.div`
	text-align: center;
	text-transform: uppercase;
	color: white;
	font-size: 5.4vw;
	border-bottom: 2px solid #b65e23;
	position: relative;
	padding: 0 25px;
	transform-origin: bottom center;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

	span {
		cursor: pointer;
	}

	span:before {
		content: '';
		background-color: #b65e23;
		position: absolute;
		left: 0;
		bottom: 0;
		width: 3px;
		height: 27px;
		transform-origin: bottom center;
		font-size: 40px;
		transform: scaleY(0);
		transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	}

	span:after {
		content: '';
		background-color: #b65e23;
		position: absolute;
		right: 0;
		bottom: 0;
		width: 3px;
		height: 27px;
		transform-origin: bottom center;
		transform: scaleY(0);
		transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	}

	&:hover {
		transform: scale(1.2);
		span:before,
		span:after {
			transform: scaleY(1.2);
		}
	}

	@media screen and (min-width: 700px) {
		font-size: 3.8vw;
	}
	@media screen and (min-width: 1020px) {
		font-size: 28px;
	}
`;
const HeroCTATline = styled.div`
	text-align: center;
	text-transform: uppercase;
	font-family: Montserrat, sans-serif;
	font-size: 4vw;
	line-height: 4vwpx;
	font-weight: 200;
	color: white;
	margin: 5px 40px auto;

	@media screen and (min-width: 700px) {
		font-size: 2.5vw;
	}
	@media screen and (min-width: 1020px) {
		font-size: 18px;
	}
`;
