import React from 'react'
import { Button,Modal,ModalFooter,ModalHeader,ModalBody} from 'reactstrap';
import  { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {togglePopup} from "../../redux/actions/popUpActions"

import PopUpForm from '../PopUpForm/PopupForm'
function BookPopUp() {

    const modal = useSelector(state => state.popUp.modal)
    const key = useSelector(state => state.popUp.key)

    const dispatch = useDispatch()



    const toggle = () => {
        dispatch(togglePopup())
    }



    return (
        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
            <PopUpForm/>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
        </Modal>
    )
}

export default BookPopUp
