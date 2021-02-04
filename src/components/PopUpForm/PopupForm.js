import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useSelector,useDispatch} from 'react-redux'
import {addBook,updateBook} from "../../redux/actions/bookActions"
import {togglePopup} from '../../redux/actions/popUpActions'

function PopupForm() {

    const key = useSelector(state => state.popUp.key)
    const selectedItem = useSelector(state => state.books.booksList[key-1]) 
    const dispatch = useDispatch()

    const submit = (event) => {

        event.preventDefault()

        const book = {name : event.target.name.value, price : event.target.price.value , 
            category: event.target.category.value, description: event.target.description.value}

        if(key){
            dispatch(updateBook(book,key))
        }
        else{
            if(book.name){
            dispatch(addBook(book))
            }
        }
    }


    return (
        <Form onSubmit = {submit}>
            <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text"  name = "name"  id="name" placeholder="Enter Name" defaultValue = {selectedItem ? selectedItem.name : null} />
            </FormGroup>
            <FormGroup>
            <Label for="price">Price</Label>
            <Input type="number" name = "price"  id="price" placeholder="Enter price"  defaultValue = {selectedItem ? selectedItem.price : null} />
            </FormGroup>
            <FormGroup>
            <Label for="category">Category</Label>
            <Input type="text" name = "category"  id="category" placeholder="Enter category"  defaultValue = {selectedItem ? selectedItem.category : null} />
            </FormGroup>
            <FormGroup>
            <Label for="description">Description</Label>
            <Input type="text" name = "description"  id="description" placeholder="Enter description"  defaultValue = {selectedItem ? selectedItem.description : null} />
            </FormGroup>
            <Button >Submit</Button>
        </Form>
    )
}

export default PopupForm;
