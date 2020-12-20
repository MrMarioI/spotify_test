import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './../App.css';

export default function ButtonDisplay(props) {
	return (
    <button {...props}>
		<FontAwesomeIcon
			size="1x"
			color="white"
			pointerEvents="auto"
			className="is-clickable link icon display"
			icon={faEye}
		/>
    </button>
	);
}
