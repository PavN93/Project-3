import React, { Component } from "react";
import "./Weather.css";

class Weather extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.getCurrentWeather = this.getCurrentWeather.bind(this);
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.getCoordinates,
        this.handleLocationError
      );
    } else {
      alert("Geolocation not supported by this browser");
    }
  }

  getCoordinates(position) {
    console.log(position);
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    this.getCurrentWeather()
  }


  getCurrentWeather() {
      // Will need to hide the API key eventually in a .env file
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=metric&appid=8e0308b9851c786d7cb67d7d244e9756`)
      .then(response => response.json())
      .then(data => this.setState({
          description: data.weather.description,
          temp: Math.floor(data.main.temp),
          icon: "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
      }))
  }

  handleLocationError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for geolocation");
        break;
      default:
        alert("No geolocation data available");
    }
  }

  render() {
    return (
      <div className="ui container currentWeather">
          <p>Current forecast: {this.state.temp}°C</p>
          <img
          alt={this.state.description}
          className="weatherIcon"
          src={this.state.icon}
        />
      </div>
    );
  }
}

export default Weather;
