import React from 'react';

import Logo from './Logo';
import LeftMenu from './LeftMenu';
import LeftMenuWide from './LeftMenuWide';
import RightMenu from './RightMenu';

import './PrimaryNav.css';

const PrimaryNav = () => {
	return (
		<div id="primary-nav">
			<LeftMenu />
			<Logo />
			<LeftMenuWide />
			<RightMenu />
		</div>
	);
};

export default PrimaryNav;
