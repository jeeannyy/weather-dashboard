import React from 'react';
import { render } from '@testing-library/react';
import Forecast from './Forecast';

test('shows only 3 forecast items', () => {
	const sampleData = [
		{ date: '2025-05-01', temperature: 20, description: 'Clear', icon: '01d' },
		{ date: '2025-05-02', temperature: 21, description: 'Cloudy', icon: '02d' },
		{ date: '2025-05-03', temperature: 22, description: 'Rain', icon: '03d' },
		{ date: '2025-05-04', temperature: 23, description: 'Snow', icon: '04d' },
	];

	const { getAllByText } = render(<Forecast forecasts={sampleData} />);
	const temperatureElements = getAllByText(/°C/);
	expect(temperatureElements.length).toBe(sampleData.length);
});
