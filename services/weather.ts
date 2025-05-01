export async function fetchWeather(city: string) {
	const response = await fetch(`/api/weather?city=${city}`);

	if (!response.ok) {
		throw new Error('Fail to bring data');
	}

	const data = await response.json();
	return data;
}
