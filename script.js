let allCountries;

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
            allCountries = jsonData;
            console.log(allCountries);
            addCountryToList();
        });
    logInput();
}

const addCountryToList = () => {
    for (let i = 0; i < allCountries.length; i++){
        const countryFromArray = allCountries[i];

        const countriesList = document.querySelector("#countries-list")

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
    })
}

SetUp();