const population = document.querySelector(".population");
const languages = document.querySelector(".languages");
const graphTitle = document.querySelector(".graph-title");
const stat = document.getElementById("stat");

population.addEventListener("click", functionForPopulation);

languages.addEventListener("click", functionForLanguage);


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


function functionForPopulation() {
    graphTitle.innerHTML = "10 Most populated countries in the world";
    stat.innerHTML = '';

    const topCountries = new findTopCountries();
    const top10Countries = topCountries.top10Countries;
    const worldTotalPopulation = topCountries.worldTotalPopulation;

    top10Countries.forEach(element => {
        let percent = (element / worldTotalPopulation) * 100;
        let country = countries(element);

        const countryGraph = document.createElement('div');
        const countryName = document.createElement('p');
        const graphBar = document.createElement('p');
        const countryPopulation = document.createElement('p');

        countryGraph.className = 'countryGraph';
        graphBar.className = 'graphBar';
        countryName.innerHTML = `${country}`;
        countryPopulation.innerHTML = `${element}`;
        graphBar.innerHTML = `<p style="width: ${percent}%" class="bar"></p>`;

        countryGraph.append(countryName, graphBar, countryPopulation);
        stat.appendChild(countryGraph);
    });
}

function countries(population) {
    let country;
    for (let i = 0; i < countries_data.length; i++) {
        if (i==0) {
            country = 'World';
        } else if(countries_data[i].population == population) {
            country = countries_data[i].name;
        }
    }
    return country;
}

function functionForLanguage() {
    graphTitle.innerHTML = "10 Most spoken languages in the world";
    stat.innerHTML = '';
}

function findTopLanguage() {
    let languagesArray = new Array();
    for (let i=0; i < countries_data.length; i++){
        // --------------------- TO BE CONTINUE --------------------------
    }
}

functionForPopulation();