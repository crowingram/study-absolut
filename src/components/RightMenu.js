import React from 'react';
import { BiSearch, BiMenu } from 'react-icons/bi';

import './RightMenu.css';

const RightMenu = () => {
	return (
		<section id="right-menu">
			<div id="right-menu-search">
				<BiSearch />
			</div>
			<div id="right-menu-menu">
				<BiMenu />
			</div>
		</section>
	);
};

export default RightMenu;
