import React from 'react';

import './HeroCTA.css';

const HeroCTA = ({ headline, tagline }) => {
	return (
		<section id="hero-cta">
			<header id="hero-cta-headline">
				<span>{headline}</span>
			</header>
			<p id="hero-cta-tagline">{tagline}</p>
		</section>
	);
};

export default HeroCTA;
