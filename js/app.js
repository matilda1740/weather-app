// DOM MANIPULATION AND ...

const cityForm = document.querySelector('form');

const card = document.querySelector('.card');
const details = document.querySelector('.details');

const time = document.querySelector('img.time');
const icon = document.querySelector('.icon > img');

const updateUI = (someData) => {
	// const cityData = someData.cityDetails;
	// const weatherData = someData.weatherDetails;

	//destructuring properties - names have to be the same as the objects

	const { cityDetails, weatherDetails } = someData;

	//update details template
	details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weatherDetails.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weatherDetails.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
    `;

	//update the night and day icons
	const iconSrc = `images/icons/${weatherDetails.WeatherIcon}.svg`;
	icon.setAttribute('src', iconSrc);

	//TERNARY OPERATOR

	let timeSrc = weatherDetails.IsDayTime ? 'images/day.svg' : 'images/night.svg';

	time.setAttribute('src', timeSrc);

	card.classList.toggle('d-none');
};

const updateCity = async (city) => {
	// console.log(city);

	const cityDetails = await getCity(city);
	const weatherDetails = await getWeather(cityDetails.Key);

	//object shorthand notation - when value label = name label
	return { cityDetails, weatherDetails };
};

cityForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const city = cityForm.city.value.trim();
	cityForm.reset();

	//update UI with new city
	updateCity(city).then((someData) => updateUI(someData)).catch((error) => console.log(error));

	// setting Local storage
	localStorage.setItem('city', city);
});

if (localStorage.getItem('city')) {
	updateCity(localStorage.getItem('city')).then((blah) => updateUI(blah)).catch((anyError) => console.log(anyError));
}
