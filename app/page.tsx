'use client';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { getWeather } from '../lib/getWeather';

export default function HomePage() {
	const router = useRouter();

	const [city, setCity] = useState('');

	const handleButton = () => {
		router.push(`/weather/${city}`);
	};

	return (
		<>
			<h1>Which city are you looking for?</h1>
			<input
				type='text'
				value={city}
				placeholder='type your city'
				onChange={(event) => {
					setCity(event.target.value);
				}}
			/>

			<button onClick={handleButton}>Search</button>
		</>
	);
}
