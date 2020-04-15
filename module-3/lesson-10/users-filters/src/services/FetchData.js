const ENDPOINT = 'https://randomuser.me/api/?results=10'

const fetchData = () => fetch(ENDPOINT).then(response => response.json())

export default fetchData;