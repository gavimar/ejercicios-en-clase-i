const ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

const fetchData = () => fetch(ENDPOINT).then(response => response.json());

export default fetchData