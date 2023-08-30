const allCountries = [];

const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    console.log(response);
    const jsonData = await response.json();
    await allCountries.push(jsonData);
    console.log(allCountries);
}

fetchCountries();