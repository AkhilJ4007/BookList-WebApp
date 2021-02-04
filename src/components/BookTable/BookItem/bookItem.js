import React from 'react'
import {Button } from 'reactstrap'
import './bookItem.css'
import {itemSelected} from '../../../redux/actions/popUpActions'
import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {removeBook} from "../../../redux/actions/bookActions"
function BookItem(props) {
    const {book,itemNumber} = props
    const dispatch = useDispatch()
    const itemClicked = (itemNumber) => () => {
        dispatch(itemSelected(itemNumber))
    }
    const deleteBook = (itemNumber) => () => {
        dispatch(removeBook(itemNumber))
    }

    return (
        <tr>
            <th scope="row">{itemNumber}</th>
            <td className = "bookName" onClick = {itemClicked(itemNumber)} >{book.name}</td>
            <td>{book.price}</td>
            <td>{book.category}</td>
            <td>{book.description}</td>
            <td><Button color="danger" onClick = {deleteBook(itemNumber)}>Delete</Button></td>
        </tr>
    )
}

export default BookItem
