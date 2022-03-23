const population = document.querySelector(".population");
const languages = document.querySelector(".languages");
const graphTitle = document.querySelector(".graph-title");
const stat = document.getElementById("stat");

population.addEventListener("click", () => {
    graphTitle.innerHTML = "10 Most populated countries in the world";
});

languages.addEventListener("click", () => {
    graphTitle.innerHTML = "10 Most spoken languages in the world";
});


function findTopCountries() {
    let populationArray = new Array();
    for (let i = 0; i < countries_data.length; i++) {
        populationArray.push(countries_data[i].population);
    }

    let worldTotalPopulation = populationArray.reduce((a, b) => a + b, 0);
    let top10Countries = new Array();

    for (let i = 0; i < 10; i++) {
        top10Countries.push(Math.max(...populationArray));
        let index = populationArray.indexOf(Math.max(...populationArray));
        populationArray.splice(index, 1);
    }

    // console.log(top10Countries);
    // console.log(worldTotalPopulation);

    top10Countries.unshift(worldTotalPopulation);
    return {top10Countries, worldTotalPopulation};
}

const topCountries = new findTopCountries();
const top10Countries = topCountries.top10Countries;
const worldTotalPopulation = topCountries.worldTotalPopulation;

top10Countries.forEach(element => {    
    let percent = (element / worldTotalPopulation) * 100;
    // console.log(percent);
    let country = countries(element);
    stat.innerHTML += `<div><span>${country}</span><p style="width: ${percent}%;"></p></div>`;
});

function countries(population) {
    let country;
    for (let i = 0; i < countries_data.length; i++) {
        if(countries_data[i].population == population) {
            country = countries_data[i].name;
        }
    }
    return country;
}