const searchCounrty = () => {
    const userInput = document.getElementById('user-input');
    const userInputValue = userInput.value;
    userInput.value = '';
    const url = `https://restcountries.com/v3.1/name/${userInputValue}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displaySearchResult(data));
}


const displaySearchResult = countries =>{
    countries.forEach(country => {
        // console.log(country);
        const mainDiv = document.getElementById('show-result');
        mainDiv.textContent = '';
        const childDiv = document.createElement('div');
        childDiv.innerHTML = `
            <h1>Country Name: ${country.name.common}</h1>
            <h2>Official Name: ${country.name.official}</h2>
            <h3>Continents: ${country.continents}</h3>
            <h4>Capital Name: ${country.capital}</h4>
            <h4>Population: ${country.population}</h4>
            <img src="${country.flags.png}">
        `;
        mainDiv.appendChild(childDiv);
    })
}
