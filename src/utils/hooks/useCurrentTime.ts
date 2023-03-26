import { useEffect, useState } from 'react';

const getCurrentTime = (): string => {
	const now = new Date();
	const hour = now.getHours().toString().padStart(2, '0');
	const minute = now.getMinutes().toString().padStart(2, '0');
	return `${hour}:${minute}`;
};

export const useCurrentHoursAndMinutes = () => {
	const [time, setTime] = useState(getCurrentTime());

	useEffect(() => {
		const interval = setInterval(() => {
			const newTime = getCurrentTime();
			if (newTime !== time) {
				setTime(newTime);
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [time]);

	return time;
};
