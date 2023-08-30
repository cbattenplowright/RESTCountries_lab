let countryList;

const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    console.log(response);
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
}

const SetUp = () => {
    fetchCountries()
        .then((jsonData) => {
            countryList = jsonData;
            console.log(countryList);
            addCountryToList();
        });
    logInput();
}

const addCountryToList = () => {
    const countriesList = document.querySelector("#countries-list");
    countriesList.innerHTML = "";
    for (let i = 0; i < countryList.length; i++){
        const countryFromArray = countryList[i];

        console.log(countryFromArray);
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

const logInput = () => {
    const enterButton = document.querySelector("#enter");
    const input = document.querySelector("#country");

    enterButton.addEventListener("click", () => {
        console.log(input.value);
        filterByFormInput(input.value);
        addCountryToList(countryList);
    })
}

const filterByFormInput = (countryQuery) => {
    
    const includesLetters = (countryPassedIn) => {
        return countryPassedIn.name.common.toLowerCase().includes(countryQuery.toLowerCase());
    }

    const filteredCountries = countryList.filter(country => includesLetters(country));
    console.log(filteredCountries);
    countryList = filteredCountries;
    console.log("This is the country list");
    console.log(countryList);
};

SetUp();