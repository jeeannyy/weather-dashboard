import React from 'react';

type ForecastItem = {
	date: string;
	temperature: number;
	description: string;
};

type Props = {
	forecasts: ForecastItem[];
};

export default function Forecast({ forecasts }: Props) {
	return (
		<div>
			<p className='font-bold mb-1'>🗓️ 3 Day Forecast</p>
			{forecasts.map((item, idx) => (
				<div key={idx} className='text-sm mb-1'>
					{item.date} : {item.temperature}°C | {item.description}
				</div>
			))}
		</div>
	);
}
