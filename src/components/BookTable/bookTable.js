import React from 'react'
import {Table } from 'reactstrap';
import BookItem from './BookItem/bookItem'

import {useSelector,useDispatch} from 'react-redux'

import './bookTable.css'

function BookTable() {

    const books = useSelector(state => state.books.booksList)

    const dispatch = useDispatch()

    return (
        <Table className = "table">
        
        <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th></th>
        </tr>
        </thead>
        
        <tbody>
            { 
            books ?
            books.map((book,id) => { return <BookItem key = {id + 1} itemNumber = {id + 1} book = {book}/> }): null }
        
        </tbody>
        
    </Table>

    )
}

export default BookTable
