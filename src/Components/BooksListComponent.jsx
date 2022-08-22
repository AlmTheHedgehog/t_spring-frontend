import React, { Component } from 'react';
import BookService from '../services/BookService';

class BooksListComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            books:[]
        }
        this.getDate=this.getDate.bind(this);
    }

    componentDidMount(){
        BookService.getBooks().then((res)=>{
            this.setState({books: res.data});
        });
    }

    getDate(curBook){
        return curBook.publishDate.slice(0, 4);
    }

    render() {
        return (
            <div>
                <h1 className='text-center'>Whole library</h1>
                <div className='row'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Author</th>
                                <th scope="col" className='text-center'>Year</th>
                                <th scope="col">Publisher</th>
                                <th scope="col">ISBN</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.books.map(
                                    book =>
                                    <tr key={book.id}>
                                        <td className='w-30'>
                                            <a className='simple-link' href={'book/' + book.id}>{book.title}</a>
                                        </td>
                                        <td className='w-20'>{book.author}</td>
                                        <td className='w-5 text-center'>{this.getDate(book)}</td>
                                        <td className='w-25'>{book.publisher}</td>
                                        <td className='w-20'>{book.isbn}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default BooksListComponent;