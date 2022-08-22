import React from 'react'
import { useParams, useNavigate} from 'react-router'
import BookPageComponent from './BookPageComponent';

export default function BookPageComponentRoute(){
    let {BookId} = useParams();
    const navigate = useNavigate();
    return (
        <BookPageComponent BookId = {BookId} navigate = {navigate}/>
    )
}