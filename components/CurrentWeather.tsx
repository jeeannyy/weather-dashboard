import React from 'react';

type Props = {
	city: string;
	temperature: number;
	description: string;
	icon: string;
};

export default function CurrentWeather({
	city,
	temperature,
	description,
	icon,
}: Props) {
	return (
		<div className='mb-4'>
			<img
				src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
				alt={description}
			/>

			<p className='text-xl'>{temperature}°C</p>
			<p className='text-l'>{description}</p>
		</div>
	);
}
