import React from 'react';

export default function Feedback(props) {
	if (props.feedback === true) {
		return (
			<div className="feedback">
				<div className="hot">Hot</div>
			</div>
		);
	} else {
		return (
			<div className="feedback">
				<div className="cold">Cold</div>
			</div>
		);
	}
}