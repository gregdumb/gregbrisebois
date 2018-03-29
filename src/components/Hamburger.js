/**
 * Based on hamburgers by Jonathan Suh
 * https://github.com/jonsuh/hamburgers
 */

import React from 'react'

const Hamburger = ({ isActive, type }) => {
	let activeStr = isActive ? " is-active" : "";
	let typeStr = type ? " " + type : " hamburger--collapse";
	let classStr = "hamburger " + typeStr + activeStr;
	
	return(
		<button className={classStr} type="button" style={{padding: 0}} >
			<span className="hamburger-box" css={{
				transform: 'scale(0.7)',
			}} >
				<span className="hamburger-inner" css={{
					backgroundColor: 'white !important',
					
					':before': {backgroundColor: 'white !important'},
					':after': {backgroundColor: 'white !important'},
				}} ></span>
			</span>
		</button>
	)
}

export default Hamburger;