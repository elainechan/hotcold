import React from 'react';

export default function Records(props) {
	const records = props.records.map((record, i) => <div key={i}>{record}</div>);
	return (
		<div className="records">
			{records}
		</div>
	)
}