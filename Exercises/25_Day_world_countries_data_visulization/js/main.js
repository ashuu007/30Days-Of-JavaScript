const population = document.querySelector('.population');
const languages = document.querySelector('.languages');
const graphTitle = document.querySelector('.graph-title');

population.addEventListener('click', () => {
    graphTitle.innerHTML = '10 Most populated countries in the world';
})

languages.addEventListener('click', () => {
    graphTitle.innerHTML = '10 Most spoken languages in the world';
})

