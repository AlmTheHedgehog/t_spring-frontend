import React, { Component } from 'react';
import BookService from '../services/BookService';

class BooksListComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            author: this.props.Author,
            sorting: null,
            books:[]
        }
        this.getDate=this.getDate.bind(this);
        this.putArrow=this.putArrow.bind(this);
    }

    componentDidMount(){
        BookService.getBooksOfAuthor(this.state.author, this.state.sorting).then((res)=>{
            this.setState({books: res.data});
        });
    }

    getDate(curBook){
        return curBook.publishDate.slice(0, 4);
    }

    putArrow(object){
        if(this.state.sorting !== null){
            if(this.state.sorting.includes(object)){
                if(this.state.sorting.includes("Up")){
                    return "↑";
                }else if(this.state.sorting.includes("Down")){
                    return "↓";
                }else{
                    console.error("Wrong sorting in this.state during putArrow(object)");
                    return "";
                }
            }else{
                return "";
            }
        }else{
            return "";
        }
    }

    sort(element){
        if(this.state.sorting === BookService.getSortString("Down", element)){
            this.setState({sorting: BookService.getSortString("Up", element)}, () => {
                this.componentDidMount();
            });
        }else{
            this.setState({sorting: BookService.getSortString("Down", element)}, () => {
                this.componentDidMount();
            });
        }
    }

    render() {
        return (
            <div>
                <h1 className='text-center'>Author library</h1>
                <h3 className='text-center'>{this.state.author}</h3>
                <div className='table-div'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col" className='text-center'>
                                    <button className='button-like-link' onClick={() => this.sort("Year")}>
                                        Year{this.putArrow("Year")}
                                    </button>
                                </th>
                                <th scope="col">Publisher</th>
                                <th scope="col">ISBN</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.books.map(
                                    book =>
                                    <tr key={book.id}>
                                        <td className='w-45'>
                                            <a className='simple-link' href={'/book/' + book.id}>{book.title}</a>
                                        </td>
                                        <td className='w-5 text-center'>{this.getDate(book)}</td>
                                        <td className='w-30'>{book.publisher}</td>
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