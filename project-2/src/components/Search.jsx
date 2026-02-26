import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "api key";

  const getWeather = async (cityName) => {
    if (!cityName.trim()) return;

    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      setWeather(res.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found.");
      } else {
        setError("Something went wrong.");
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getWeather(city);
    setCity("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-4">
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl rounded-2xl p-8 w-full max-w-md text-white">
        
        <h1 className="text-3xl font-bold text-center mb-6 tracking-wide">
          Weather App
        </h1>

        <form onSubmit={submitHandler} className="flex gap-2 mb-6">
          <input
            value={city}
            type="text"
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
            className="flex-1 px-4 py-2 rounded-lg bg-white/30 placeholder-white text-white outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Search
          </button>
        </form>

        {loading && (
          <div className="text-center animate-pulse">
            <p>Fetching weather...</p>
          </div>
        )}

        {error && (
          <p className="text-red-200 text-center font-medium">{error}</p>
        )}

        {weather && !loading && (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">{weather.name}</h2>

            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather icon"
              className="mx-auto"
            />

            <p className="text-4xl font-bold">
              {Math.round(weather.main.temp)}°C
            </p>

            <p className="capitalize text-lg">
              {weather.weather[0].description}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
              <div className="bg-white/20 p-3 rounded-lg">
                <p>Humidity</p>
                <p className="font-semibold">
                  {weather.main.humidity}%
                </p>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <p>Wind</p>
                <p className="font-semibold">
                  {weather.wind.speed} m/s
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;