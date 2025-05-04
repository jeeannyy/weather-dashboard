import axios from 'axios';

export const getWeather = async (city: string) => {
	const response = await axios.get(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.WEATHER_API_KEY}`,
		{ headers: { 'Cache-Control': 'no-store' } },
	);
	console.log(response.data, '<<response.data');
	return response.data;
};
