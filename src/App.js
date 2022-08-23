import React from 'react';
import './App.css';
import {Route, Routes, useNavigate} from 'react-router-dom';
import BooksListComponent from './Components/BooksListComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import NotFoundComponent from './Components/NotFoundComponent';
import AddBookComponent from './Components/AddBookComponent';
import BookPageRoute from './Components/BookPageRoute';
import AuthorBooksListRoute from './Components/AuthorBooksListRoute';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderComponent />
      <div className = "container">
        <Routes>
          <Route path = "/allbooks" element = {<BooksListComponent/>}/>
          <Route path = "/newbook" element = {<AddBookComponent navigate={navigate}/>}/>
          <Route path="/book/:BookId" element={<BookPageRoute/>} />
          <Route path="/author/:Author" element={<AuthorBooksListRoute/>} />
          <Route path="*" element={<NotFoundComponent/>}/>
        </Routes>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
