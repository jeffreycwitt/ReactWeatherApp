var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");

var Weather = React.createClass({
	getInitialState: function(){
		return {
			isLoading: false
		}
	},
	handleSearch: function(location){
		var _this = this;
		
		_this.setState({
			isLoading: true
		});

		openWeatherMap.getTemp(location).then(function(temp){
			_this.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function(errorMessage){
			_this.setState({
				isLoading: false,
				temp: "",
				location: ""
			})
			alert(errorMessage);
		});
	},
	render: function(){
		var {isLoading, temp, location} = this.state;

		function renderMessage(){
			if (isLoading){
				return <h3>Fetching Weather...</h3>;
			}
			else if (temp && location){
				return <WeatherMessage location={location} temp={temp}/>
			}
		}

		return(
			<div>
				<h3>Get Weather</h3>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;