import axios from 'axios';

const BOOKS_BASE_API_URL = "https://library-online-t-api-backend.herokuapp.com/api/v1/books"
const ONE_BOOK_BASE_API_URL = "https://library-online-t-api-backend.herokuapp.com/api/v1/book"
//const BOOKS_BASE_API_URL = "http://localhost:8080/api/v1/books"
//const ONE_BOOK_BASE_API_URL = "http://localhost:8080/api/v1/book"

class BookService{
    /**
     * 
     * @param {string} Direction - {Up|Down}
     * @param {string} compElement - {Year|Author|Title|Publisher|ISBN}
     */
    getSortString(Direction, compElement){
        return Direction + "By" + compElement;
    }

    getBooks(sorting){
        if(sorting === null){
            return axios.get(BOOKS_BASE_API_URL);
        }else{
            return axios.get(BOOKS_BASE_API_URL+'?sorting='+sorting);
        }
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

    getBooksOfAuthor(author, sorting){
        if(sorting === null){
            return axios.get(BOOKS_BASE_API_URL+'?author='+author);
        }else{
            return axios.get(BOOKS_BASE_API_URL+'?author='+author+'&sorting='+sorting);
        }
    }
}

export default new BookService()