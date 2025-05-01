import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { city } = req.query;

	if (!city || typeof city !== 'string') {
		return res.status(400).json({ error: 'City is required' });
	}

	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.WEATHER_API_KEY}`,
		);
		const data = await response.json();
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json({ error: 'Failed to fetch weather data' });
	}
}
