import React from 'react';

import Hero from './Hero';
import HeroCTA from './HeroCTA';

import './FullHero.css';

const FullHero = () => {
	return (
		<>
			<Hero
				headline="The Story of Absolut&nbsp;Elyx"
				tagline="Single Estate Copper Crafted Luxury&nbsp;Vodka"
			/>
			<section id="hero-cta-container">
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
			</section>
		</>
	);
};

export default FullHero;
