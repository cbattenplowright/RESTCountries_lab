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
        });
}

SetUp();