import React from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

import './LeftMenu.css';

const LeftMenu = () => {
	return (
		<section>
			<FaShoppingCart id="shopping-cart-icon" />
			<MdKeyboardArrowDown id="arrow-down-icon" />
		</section>
	);
};

export default LeftMenu;
