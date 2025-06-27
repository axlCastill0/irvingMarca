import { useState, useEffect } from "react";

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
			MX {mxnTime}
		</div>
	);
}

export default Time;
