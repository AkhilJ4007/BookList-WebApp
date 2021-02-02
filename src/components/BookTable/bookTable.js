import React from 'react'
import {Table } from 'reactstrap';
import BookItem from './BookItem/bookItem'

function bookTable({books,random}) {


    return (
        <Table>
        
        <thead>
        <tr>
            <th>#</th>
            <th>name</th>
            <th>price</th>
            <th>category</th>
            <th></th>
        </tr>
        </thead>
        
        <tbody>
            { 
            books ?
            books.map((book,id) => { return <BookItem key = {id} book = {book}/> }): null }
        
        </tbody>
        
    </Table>

    )
}

export default bookTable
