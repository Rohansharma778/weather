var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#decription');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "abb79da5408a70291cf8b5b8d22e321d";

function convertion(val) {
    return (val - 273.15).toFixed(2);   //the temperature is in fahrenheit
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name'];
        var descrip = data['weather'][0]['description']; 
        var temperature = data['main']['temp'];
        var windspeed = data['wind']['speed'];

        city.innerHTML = `Weather of <span>${nameval}</span>`;
        temp.innerHTML = `Temperature: <span>${convertion(temperature)} °C</span>`;
        description.innerHTML = `Sky conditions: <span>${descrip}</span>`;
        wind.innerHTML = `Wind speed: <span>${windspeed} km/h</span>`;
    })
    .catch(err => alert('You entered the wrong city name'));
});
