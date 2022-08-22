import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Route, Routes, useNavigate} from 'react-router-dom';
import BooksListComponent from './Components/BooksListComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import NotFoundComponent from './Components/NotFoundComponent';
import AddBookComponent from './Components/AddBookComponent';
import BookPageComponentRoute from './Components/BookPageComponentRoute';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderComponent />
      <div className = "container">
        <Routes>
          <Route path = "/allbooks" element = {<BooksListComponent/>}/>
          <Route path = "/newbook" element = {<AddBookComponent navigate={navigate}/>}/>
          <Route path="/book/:BookId" element={<BookPageComponentRoute/>} />
          <Route path="*" element={<NotFoundComponent/>}/>
        </Routes>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
