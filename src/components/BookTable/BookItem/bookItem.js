import React from 'react'
import {Button } from 'reactstrap'
import './bookItem.css'

function bookItem(props) {
    const {book} = props
    return (
        <tr>
            <th scope="row">3</th>
            <td className = "bookName">{book.name}</td>
            <td>{book.price}</td>
            <td>{book.category}</td>
            <td>{book.description}</td>
            <td><Button color="danger">Delete</Button></td>
        </tr>
    )
}

export default bookItem
