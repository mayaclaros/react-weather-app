
import React from "react";
import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            {" "}
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              {" "}
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </div>
      </form>
      <h2>Washington, D.C</h2>
      <ul>
        <li>Wednesday 7:00</li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Partly Cloudy Day"
              className="float-left"
            />
        </form>
        <h2>Washington, D.C</h2>
        <ul>
          <li>Wednesday 7:00</li>
          <li>Partly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Partly Cloudy Day"
                className="float-left"
              />

            <span className="temperature">4</span>
            <span className="unit">°C </span>
              <span className="temperature">{temperature}</span>
              <span className="unit">°C </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 74%</li>
              <li>Wind Speed: 13 km/hr</li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 74%</li>
            <li>Wind Speed: 13 km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
    );
  } else {
    const apiKey = "24b9b3ae0f6ea728ao45f6et261b0962";
    let city = "Washington, D.C";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
