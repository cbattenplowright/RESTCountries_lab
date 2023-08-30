// Query selectors
const countriesList = document.querySelector("#countries-list");
const enterButton = document.querySelector("#enter");
const input = document.querySelector("#country");

// Global Variables
let allCountries;
let filteredCountries;

// INDEX request to restcountries API 
const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    console.log(response);
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
}

// SetUp function using promises to fetch countries and then assign the country data to allCountries and display the results to user. The function also calls on logInput to add an eventListener to the enter button
const setUp = () => {
    fetchCountries()
        .then((jsonData) => {
            allCountries = jsonData;
            console.log(allCountries);
            addCountriesToUnorderedList(allCountries);
        });
    logInput();
}

// Adds countries to the countries-list element on the HTML page 
const addCountriesToUnorderedList = (countryList) => {
    countriesList.innerHTML = "";
    for (let i = 0; i < countryList.length; i++) {
        const countryFromArray = countryList[i];
        const countryListItem = document.createElement("li");
        const name = document.createElement("h4");
        const continent = document.createElement("p");
        const population = document.createElement("p");

        name.innerText = countryFromArray.name.common;
        countryListItem.appendChild(name);

        continent.innerText = countryFromArray.continents;
        countryListItem.appendChild(continent);

        population.innerText = countryFromArray.population;
        countryListItem.appendChild(population);

        countriesList.appendChild(countryListItem);

        console.log(countriesList);
        console.log(countryListItem);
    };
};

// Attaches an event listener to the enterButton when clicked it filters and outputs the countries including the input string
const logInput = () => {
    enterButton.addEventListener("click", () => {
        console.log(input.value);
        filterByFormInput(input.value);
        addCountriesToUnorderedList(filteredCountries);
    })
}

// Filters the countries by the input string and updates the filteredCountries variable
const filterByFormInput = (countryQuery) => {

    const includesLetters = (countryPassedIn) => {
        return countryPassedIn.name.common.toLowerCase().includes(countryQuery.toLowerCase());
    }

    filteredCountries = allCountries.filter(country => includesLetters(country));
    console.log(filteredCountries);
};

setUp();