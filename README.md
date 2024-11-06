# Weather App Project

This project is a weather application that allows users to view weather data for different cities, save favorite cities, and access five-day weather forecasts. It utilizes React on the frontend and JSON Server as a mock backend to store favorite cities.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

---

### Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

- **Node.js**: Make sure Node.js is installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
- **JSON Server**: This project uses JSON Server as a mock backend to store favorite city data.

### Installation

1. **Clone the Repository**:
   Open your terminal and clone the repository using the following command:

   ```bash
   git clone <repository-url>
   ```

   Replace <repository-url> with the actual URL of your Git repository.

2. **Navigate to the Project Directory**:
   After cloning, move into the project directory:

   ```bash
   cd weather-wise
   ```

3. **Install Dependencies**:
   Install all required dependencies for the frontend application by running:

   ```bash
   npm install
   ```

   This will install all packages listed in the package.json file.

## Running the Application

To run the application, follow the steps below. You’ll need two terminals: one for the React frontend and one for JSON Server.

### Step 1: Create Environment Variables

In the root directory of the project, create a `.env` file to store the API keys and URLs. Add the following content to your `.env` file:

```plaintext
REACT_APP_API_KEY=d697e316da1141f5b5aa24412fcc19e7
REACT_APP_API_URL=https://api.openweathermap.org/data/2.5
REACT_APP_JSON_SERVER_URL=http://localhost:3001
```

These environment variables will be used for accessing the OpenWeather API and JSON Server.

### Step 2: Start JSON Server

In a **new terminal**:

1.  Navigate to the `src` directory of your project:

    ```bash
    cd src
    ```

2.  Start JSON Server to simulate a backend, using db.json as the database file. Run the following command:

    ```bash
    npx json-server --watch db.json --port 3001
    ```

    Or

    ```bash
    json-server --watch db.json --port 3001
    ```

This command will start JSON Server on http://localhost:3001, where it will watch for changes in db.json and automatically reload.

### Step 3: Start the Frontend (React)

**In your original terminal**:

1. Make sure you are in the main project directory (weather-wise), and then start the React application with:

   ```bash
   npm start
   ```

2. The app should open automatically in your default browser at http://localhost:3000. If it doesn’t, you can manually open this URL in your browser.

## Usage

1. **Search Weather by City**: Enter the name of a city to get current weather and a 5-day forecast.
2. **Add to Favorites**: Click "Add to Favorites" to save a city's weather data to your favorites list.
3. **View Favorites**: Access your favorite cities and quickly see their weather. Click on any favorite city to view detailed weather information.
4. **Remove from Favorites**: Click "Remove" to delete a city from your favorites list.

## Project Structure

weather-app/ ├── public/ # Static public assets ├── src/ # Source files │ ├── components/ # React components │ │ ├── WeatherDisplay.js # Displays weather data │ │ └── FavoriteCities.js # Manages favorite cities list │ ├── services/ # API calls and JSON server operations │ │ ├── weatherService.js # OpenWeatherMap API interactions │ │ └── favoriteService.js # JSON Server interactions │ ├── App.js # Main app component │ ├── db.json # JSON server database for storing favorite cities │ ├── index.js # ReactDOM render point │ └── styles/ # CSS files ├── .env # Environment variables for API keys and URLs └── README.md # Project documentation

## Additional Notes

- **Environment Variables**: Ensure that the `.env` file is correctly configured with your API keys and URLs:

  ```plaintext
  REACT_APP_API_KEY=d697e316da1141f5b5aa24412fcc19e7
  REACT_APP_API_URL=https://api.openweathermap.org/data/2.5
  REACT_APP_JSON_SERVER_URL=http://localhost:3001
  ```

- **JSON Server**: Used to save and retrieve favorite cities data locally. Ensure it is running on port 3001 as specified in the .env file.

- **CSS Styling**: The project uses standard CSS for styling components. Make adjustments in the src/styles/ folder as needed.

### Troubleshooting

Issue: Favorite city is added multiple times

Solution: Check if the id of the favorite city is unique in db.json. If there are duplicates, remove them manually or prevent duplicates in the UI.
Issue: API Key Not Working

Solution: Verify that your OpenWeatherMap API key in the .env file is correct and not expired. You can generate a new one from OpenWeatherMap.
Issue: JSON Server not starting

Solution: Ensure you are in the src directory when starting JSON Server. Use the command npx json-server --watch db.json --port 3001.

### License

This project is licensed under the MIT License. You are free to use, modify, and distribute this application under the terms of the license. See the LICENSE file for more details.

Happy Coding! 😊
