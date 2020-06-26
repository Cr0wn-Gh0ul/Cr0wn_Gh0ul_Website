const axios = require('axios');
const Axios = axios.create({
  withCredentials: true,
});

const API_URL = process.env.REACT_APP_API ? process.env.REACT_APP_API : '/api/';

class Api {
  constructor() {
    this.options = {
      'timeout': 5000
    }
  }

  async request(route, data) {
    if (!route) { return false; }
    if (!data) { data = {}; }

    let url = API_URL + route;

    let response = false;
    try {
      response = await Axios.post(url, data, this.options)
      if (!response || !response.data || !response.data.data) {
        throw 'Failed';
      }
      return response.data;
    } catch (ex) {
      return false;
    }
  }

}

export default Api;
