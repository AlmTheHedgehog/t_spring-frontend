import React, { Component } from 'react';
import BookService from '../services/BookService';

class BookPageComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.BookId
        }
        this.getDate=this.getDate.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
    }

    getDate(Date){
        return Date.slice(0, 4);
    }

    deleteBook(){
        BookService.deleteBook(this.state.id).then(()=>{
            this.props.navigate('/allbooks');
        })
    }

    componentDidMount(){
        BookService.getBook(this.state.id).then((res)=>{
            let book = res.data;
            this.setState({title: book.title,
                author: book.author, 
                publishDate: this.getDate(book.publishDate), 
                publisher: book.publisher,
                isbn: book.isbn});
        });
    }

    render() {
        return (
            <div>
                <h1 className="display-5 text-center">{this.state.title}</h1>
                <h3 className="text-center">{this.state.publishDate}</h3>
                <div style={{margin:50}}>
                    <p>
                        <div className='book-text'><b>Author: </b>{this.state.author}</div>
                    </p>
                    <p>
                        <div className='book-text'><b>Publisher: </b>{this.state.publisher}</div>
                    </p>
                    <p>
                        <div className='book-text'><b>ISBN: </b>{this.state.isbn}</div>
                        
                    </p>
                </div>
                <div className='text-center'>
                    <button type='button' className='btn btn-danger text-center' onClick={this.deleteBook}>Delete</button>
                </div>
            </div>
        );
    }
}

export default BookPageComponent;
