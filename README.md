# Weather Dashboard

A simple weather application built with Next.js and React.


## How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   ```

2. Create a .env.local file and add your OpenWeatherMap API key:

   WEATHER_API_KEY=your_api_key_here

4. Install dependencies and start the development server:

   ```
   npm install
   npm run dev
   ```

## Architectural Decisions

- Client-side fetching is used for simplicity, with basic loading and error handling via useState.

- Basic SEO was considered by adding `<Head>` tags, including a custom `<title>` and `<meta description>` for the homepage.

- Minimal styling to keep the focus on core functionality.
