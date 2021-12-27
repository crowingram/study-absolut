import React from 'react';

import './Hero.css';

const Hero = ({ headline, tagline }) => {
	return (
		<section id="hero">
			<header id="headline">{headline}</header>
			<p id="tagline">{tagline}</p>
		</section>
	);
};

export default Hero;
