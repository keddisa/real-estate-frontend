import axios from 'axios';

export default axios.get ('https://localhost:3000/api/properties').then(response => console.log(response));