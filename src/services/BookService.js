import axios from 'axios';

const BOOKS_BASE_API_URL = "https://library-online-t-api-backend.herokuapp.com/api/v1/books"
const ONE_BOOK_BASE_API_URL = "https://library-online-t-api-backend.herokuapp.com/api/v1/book"

class BookService{
    getBooks(){
        return axios.get(BOOKS_BASE_API_URL);
    }

    addBook(book){
        return axios.post(BOOKS_BASE_API_URL, book);
    }

    getBook(id){
        return axios.get(ONE_BOOK_BASE_API_URL+'/'+id);
    }

    deleteBook(id){
        return axios.delete(ONE_BOOK_BASE_API_URL+'/'+id);
    }
}

export default new BookService()