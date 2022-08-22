import React, { Component} from 'react';
import BookService from '../services/BookService';
import Validator from '../validation/Validator';

class AddBookComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '', 
            publishDate: '',
            publisher: '', 
            isbn: '',
            TiltleInvalid: '',
            AuthorInvalid: '',
            DateInvalid: '',
            PublisherInvalid: '',
            isbnInvalis: ''
        }
        this.titleChangeHandler = this.titleChangeHandler.bind(this);
        this.authorChangeHandler = this.authorChangeHandler.bind(this);
        this.publisherChangeHandler = this.publisherChangeHandler.bind(this);
        this.isbnChangeHandler = this.isbnChangeHandler.bind(this);
        this.publishDateChangeHandler = this.publishDateChangeHandler.bind(this);
        this.addBook = this.addBook.bind(this);
    }

    addBook = (event) =>{
        event.preventDefault();
        console.log('before validation');
        if(this.validate()){
            let publisher = this.state.publisher;
            let isbn = this.state.isbn;
            if((this.state.PublisherInvalid === '') && (this.state.publisher === '')){
                publisher = 'N/A';
            }
            if((this.state.isbnInvalis === '') && (this.state.isbn === '')){
                isbn = 'N/A';
            }
            
            let newBook = {title: this.state.title, author: this.state.author, publishDate: this.state.publishDate,
                publisher: publisher, isbn: isbn};
            console.log('before Bookservice.addBook');
            BookService.addBook(newBook).then(()=>{
                console.log('Ok.');
                //this.props.navigate('/allbooks');
            })
        }
    }

    validate = () =>{
        let TiltleInvalid = '';
        let AuthorInvalid = '';
        let DateInvalid = '';
        let PublisherInvalid = '';
        let isbnInvalis = '';

        TiltleInvalid = Validator.stringValid(this.state.title, true, false, false, false, false);
        AuthorInvalid = Validator.stringValid(this.state.author, true, false, true, false, false);
        DateInvalid = Validator.stringValid(this.state.publishDate, true, false, false, false, false);
        PublisherInvalid = Validator.stringValid(this.state.publisher, false, false, false, true, false);
        isbnInvalis = Validator.stringValid(this.state.isbn, false, false, false, false, true);

        this.setState({TiltleInvalid, AuthorInvalid, DateInvalid, PublisherInvalid, isbnInvalis});
        if((TiltleInvalid.length === 0) &&
        (AuthorInvalid.length === 0) &&
        (DateInvalid.length === 0) &&
        (PublisherInvalid.length === 0) &&
        (isbnInvalis.length === 0)){
            return true;
        }
        return false;
    }

    titleChangeHandler = (event) =>{
        this.setState({title: event.target.value});
    }
    authorChangeHandler = (event) =>{
        this.setState({author: event.target.value});
    }
    publisherChangeHandler = (event) =>{
        this.setState({publisher: event.target.value});
    }
    isbnChangeHandler = (event) =>{
        this.setState({isbn: event.target.value});
    }
    publishDateChangeHandler = (event) =>{
        this.setState({publishDate: event.target.value});
    }

    render() {
        return (
            <div className='newbook-form'>
                <form>
                    <h1 className='text-center'>New Book</h1>
                    <div className="container text-center">
                        <div className="row" style={{padding: 10}}>
                            <div className="col-sm-8">
                                <div className="mb-3">
                                    <label htmlFor="TitleInput" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="TitleInput" value={this.state.title} 
                                    onChange={this.titleChangeHandler} autoComplete="off"/>
                                    <span className='input-invalid'>{this.state.TiltleInvalid}</span>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="mb-3">
                                    <label htmlFor="AuthorInput" className="form-label">Author</label>
                                    <input type="text" className="form-control" id="AuthorInput" value={this.state.author} 
                                    onChange={this.authorChangeHandler} autoComplete="off"/>
                                    <span className='input-invalid'>{this.state.AuthorInvalid}</span>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{padding: 10}}>
                            <div className="col-sm">
                                <div className="mb-3">
                                    <label htmlFor="AuthorInput" className="form-label">Publisher</label>
                                    <input type="text" className="form-control" id="PublisherInput" value={this.state.publisher}
                                    onChange={this.publisherChangeHandler} autoComplete="off"/>
                                    <span className='input-invalid'>{this.state.PublisherInvalid}</span>
                                </div>    
                            </div>
                            <div className="col-sm">
                                <div className="mb-3">
                                    <label htmlFor="AuthorInput" className="form-label">ISBN</label>
                                    <input type="text" className="form-control" id="isbnInput" value={this.state.isbn} 
                                    onChange={this.isbnChangeHandler} autoComplete="off"/>
                                    <span className='input-invalid'>{this.state.isbnInvalis}</span>
                                </div>    
                            </div>
                            <div className="col-sm">
                                <div className="mb-3">
                                    <label htmlFor="DateInput" className="form-label">Year</label><br/>
                                    <input type="date" name="DateInput" className="form-control text-center w-50"
                                    value={this.state.publishDate} onChange={this.publishDateChangeHandler}/>
                                    <span className='input-invalid'>{this.state.DateInvalid}</span>
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div className="container text-center" style={{padding: 20}}>
                        <div className="row justify-content-md-center">
                            <div className="col col-lg-2">
                                <button type="button" className="btn btn-success btn-lg" onClick={this.addBook}>Add</button>
                            </div>
                            <div className="col-md-auto"></div>
                            <div className="col col-lg-2">
                                <a role="button" className="btn btn-danger btn-lg" href="/">Cancel</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddBookComponent;