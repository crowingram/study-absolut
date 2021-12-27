import React from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

import './LeftMenu.css';

const LeftMenu = () => {
	return (
		<section>
			<FaShoppingCart />
			<MdKeyboardArrowDown />
		</section>
	);
};

export default LeftMenu;
