import axios from 'axios';

const API = 'https://platzi-store-webpack-api.herokuapp.com/api/v1';

const getData = async () => {
  const response = await axios(API);
  const products = response.data;

  return products;
};

export default getData;
