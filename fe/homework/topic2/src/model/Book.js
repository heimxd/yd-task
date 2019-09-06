const axios = require('axios');
const { api_base_url } = require('../../config');

class Book {
  async list() {
    const { data } = await axios.get(`${api_base_url}book/list`);
    return data;
  }
  async create(params) {
    const { data } = await axios.get(`${api_base_url}book/create`, {
      params,
    });
    return data;
  }
  async delete(params) {
    const { data } = await axios.get(`${api_base_url}book/delete`, {
      params,
    });
    return data;
  }
  async update(params) {
    const { data } = await axios.get(`${api_base_url}book/update`, {
      params,
    });
    return data;
  }
}

module.exports = Book;
