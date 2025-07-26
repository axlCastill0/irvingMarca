import { useState, useEffect } from "react";

function matchTimeLength(mexico: string, barcelona: string) {
	if (barcelona.length - mexico.length === 1) {
		return "\u00A0\u00A0\u00A0" + mexico;
	} else if (barcelona.length === mexico.length) {
		return "\u00A0\u00A0" + mexico;
	} else {
		return "\u00A0" + mexico;
	}
}

function Time() {
	const getBcnTime = () =>
		new Date().toLocaleTimeString("en-US", { timeZone: "Europe/Madrid" });
	const getMxnTime = () =>
		new Date().toLocaleTimeString("en-US", { timeZone: "America/Mexico_City" });

	const [bcnTime, setBcnTime] = useState(getBcnTime());
	const [mxnTime, setMxnTime] = useState(getMxnTime());

	useEffect(() => {
		const interval = setInterval(() => {
			setBcnTime(getBcnTime());
			setMxnTime(getMxnTime());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="times">
			BCN {bcnTime}
			<br />
			MX{matchTimeLength(mxnTime, bcnTime)}
		</div>
	);
}

export default Time;
