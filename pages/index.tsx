import React from 'react';
import Head from 'next/head';
import { useState } from 'react';
import { fetchWeather } from '../services/weather';
import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';

export default function HomePage() {
	const [city, setCity] = useState('');
	const [weatherData, setWeatherData] = useState<any>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const handleSearch = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError('');
		setWeatherData(null);

		try {
			const data = await fetchWeather(city);
			if (!data?.city?.name || !data.list?.length) {
				throw new Error('Invalid city');
			}
			setWeatherData(data);
		} catch (err) {
			setError('Please check the city name and try again!');
		} finally {
			setLoading(false);
		}
	};

	function capitaliseFirstLetter(text: string) {
		return text.charAt(0).toUpperCase() + text.slice(1);
	}

	function getDailyForecast(list: any[]) {
		const seen = new Set();
		const result = [];

		for (const item of list) {
			if (!item?.dt_txt) continue;
			const date = item.dt_txt.split(' ')[0];
			if (!seen.has(date)) {
				seen.add(date);
				result.push(item);
			}
			if (result.length === 4) break;
		}
		return result.slice(1);
	}

	const dailyForecast = weatherData?.list
		? getDailyForecast(weatherData.list)
		: [];

	return (
		<>
			<Head>
				<title>Weather App with 3-day more Forecast</title>
				<meta
					name='description'
					content='Check the current weather and 3-day forecast by city.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<main className='min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100'>
				<h1 className='text-4xl text-slate-800 font-bold mb-8'>🌤 Weather 🌤</h1>

				<form onSubmit={handleSearch} className='flex gap-2 mb-8'>
					<input
						type='text'
						placeholder='Enter city name'
						value={city}
						onChange={(e) => setCity(e.target.value)}
						className='p-2 rounded border text-black'
					/>
					<button
						type='submit'
						className='bg-zinc-500 text-white px-4 py-2 rounded'
						disabled={!city}
					>
						Search
					</button>
				</form>

				{loading && <p>Loading...</p>}
				{error && <p>{error}</p>}

				{weatherData?.city && weatherData?.list && (
					<div className='bg-stone-200 p-5 rounded shadow w-full max-w-md text-black flex flex-col items-center'>
						<CurrentWeather
							city={weatherData.city.name}
							temperature={weatherData.list[0].main.temp}
							description={capitaliseFirstLetter(
								weatherData.list[0].weather[0].description,
							)}
							icon={weatherData.list[0].weather[0].icon}
						/>

						<Forecast
							forecasts={dailyForecast.map((item: any) => ({
								date: item.dt_txt.split(' ')[0],
								temperature: item.main.temp,
								description: capitaliseFirstLetter(item.weather[0].description),
								icon: item.weather[0].icon,
							}))}
						/>
					</div>
				)}
			</main>
		</>
	);
}
