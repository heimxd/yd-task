class Book {
  constructor() {
    this.inputName = $('#input-name');
    this.inputAuthor = $('#input-author');
    this.inputPrice = $('#input-author');
    this.id = 0;
  }
  init(){
    $('#btn-create-confirm').on('click', this.create);
  }
  create = async () => {
    const { data } = await axios.post('/book/create', {
      name: this.inputName.val(),
      author: this.inputAuthor.val(),
      price: this.inputPrice.val(),
    });
    $('#myModal').modal('hide');
  };
}
const book = new Book();
book.init();
export default book;
