class Book {
  async all() {
    const result = await {
      code: '0',
      msg: 'success',
      data: [{ id: 1, name: 'name1' }, { id: 2, name: 'name1' }],
    };
    return result;
  }
}

module.exports = Book;
