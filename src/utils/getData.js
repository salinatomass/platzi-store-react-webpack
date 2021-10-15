import axios from 'axios';

const API = 'https://us-central1-gndx-fake-api.cloudfunctions.net/api';

const getData = async () => {
  const response = await axios(API);
  const products = response.data;

  return products;
};

export default getData;
