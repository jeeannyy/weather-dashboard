import React from 'react';
import { getWeather } from '../../../lib/getWeather';

export default async function WeatherPage({
	params,
}: {
	params: { city: string };
}) {
	const weather = await getWeather(params.city);

	console.log(weather, '<<what is weather');

	const iconCode = weather.weather[0].icon;
	const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

	return (
		<>
			<h4>
				{weather.name}, {weather.sys.country}
			</h4>
			<img src={iconUrl} alt='weather icon' width={80} height={80} />
			<h4>{weather.weather[0].main}</h4>
			<h4>{weather.weather[0].description}</h4>
			<h4>{weather.weather[0].visibility}</h4>
			<h4>{weather.main.feels_like}°C</h4>
		</>
	);
}
