const mass = document.getElementById("mass");
const selectedPlanet = document.querySelector("select");
const button = document.querySelector("button");
const imageBox = document.querySelector(".image");
const planetImage = document.querySelector(".planet-image");
const description = document.querySelector(".description");

button.addEventListener("click", () => {
    description.style.display = "grid";
    imageBox.style.display = "block";

    if (!mass.value)
    {
        imageBox.style.display = "none";
        description.innerHTML = "Mass is required";
    } 
    else if (selectedPlanet.value == "neptune")
    {
        planetImage.src = "./images/neptune.png";
        weightOnPlanet = calculateWeight(mass.value, 11);
        description.innerHTML = `The weight of object on Planet <strong>NEPTUNE</strong> <div>${weightOnPlanet.toFixed(2)} N</div>`;
    } 
    else if (selectedPlanet.value === "mercury")
    {
        planetImage.src = "./images/mercury.png";
        weightOnPlanet = calculateWeight(mass.value, 0.37);
        description.innerHTML = `The weight of object on Planet <strong>MERCURY</strong> <div>${weightOnPlanet.toFixed(2)} N</div>`;
    }
    else if (selectedPlanet.value === "earth")
    {
        planetImage.src = "./images/earth.png";
        weightOnPlanet = calculateWeight(mass.value, 0.37);
        description.innerHTML = `The weight of object on Planet <strong>EARTH</strong> <div>${weightOnPlanet.toFixed(2)} N</div>`;
    }
    else if (selectedPlanet.value === "venus")
    {
        planetImage.src = "./images/venus.png";
        weightOnPlanet = calculateWeight(mass.value, 8.9);
        description.innerHTML = `The weight of object on Planet <strong>VENUS</strong> <div>${weightOnPlanet.toFixed(2)} N</div>`;
    }
    else if (selectedPlanet.value === "pluto") {
        planetImage.src = "./images/pluto.png";
        weightOnPlanet = calculateWeight(mass.value, 0.07);
        description.innerHTML = `The weight of object on Planet <strong>PLUTO</strong> <div>${weightOnPlanet.toFixed(2)} N</div>`;
    }
    else if (selectedPlanet.value === "jupiter") {
        planetImage.src = "./images/jupiter.png";
        weightOnPlanet = calculateWeight(mass.value, 23.1);
        description.innerHTML = `The weight of object on Planet <strong>JUP</strong> <div>${weightOnPlanet.toFixed(2)} N</div>`;
    }
    else if (selectedPlanet.value === "mars") {
        planetImage.src = "./images/mars.png";
        weightOnPlanet = calculateWeight(mass.value, 3.7);
        description.innerHTML = `The weight of object on Planet <strong>mars</strong> <div>${weightOnPlanet.toFixed(2)} N</div>`;
    }
    else if (selectedPlanet.value === "moon") {
        planetImage.src = "./images/moon.png";
        weightOnPlanet = calculateWeight(mass.value, 1.6);
        description.innerHTML = `The weight of object on Planet <strong>MOON</strong> <div>${weightOnPlanet.toFixed(2)} N</div>`;
    }
    else if (selectedPlanet.value === "uranus") {
        planetImage.src = "./images/uranus.png";
        weightOnPlanet = calculateWeight(mass.value, 8.7);
        description.innerHTML = `The weight of object on Planet <strong>URANUS</strong> <div>${weightOnPlanet.toFixed(2)} N</div>`;
    }
    else if (selectedPlanet.value === "saturn") {
        planetImage.src = "./images/saturn.png";
        weightOnPlanet = calculateWeight(mass.value, 3.7);
        description.innerHTML = `The weight of object on Planet <strong>SATURN</strong> <div>${weightOnPlanet.toFixed(2)} N</div>`;
    }
    else {
        imageBox.style.display = "none";
        description.innerHTML = "You did not choose a planet";
    }
});

function calculateWeight(mass, weight) {
    weightOnPlanet = mass * weight;
    return weightOnPlanet;
}
