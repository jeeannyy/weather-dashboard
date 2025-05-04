export interface WeatherData {
	name: string;
	sys: {
		country: string;
	};
	main: {
		temp: number;
		feels_like: number;
		humidity: number;
	};
	visibility: number;
	weather: {
		main: string;
		description: string;
		icon: string;
	}[];
}
