import React from 'react'
import { useParams, useNavigate} from 'react-router'
import AuthorBooksListComponent from './AuthorBooksListComponent';

export default function BookPageRoute(){
    let {Author} = useParams();
    const navigate = useNavigate();
    return (
        <AuthorBooksListComponent Author = {Author} navigate = {navigate}/>
    )
}