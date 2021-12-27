import React from 'react';

import './Logo.css';

function Logo() {
	return (
		<>
			<div id="center-logo">
				<img
					src="./images/logo-elyx-copper.png"
					width="200"
					height="28"
					alt=""
				/>
			</div>
			<div id="left-logo-narrow">
				<img
					src="./images/logo-elyx-copper-bar.png"
					width="215"
					height="55"
					alt=""
				/>
			</div>
			<div id="left-logo-wide">
				<img
					src="./images/logo-elyx-white.png"
					width="215"
					height="55"
					alt=""
				/>
			</div>
		</>
	);
}

export default Logo;
