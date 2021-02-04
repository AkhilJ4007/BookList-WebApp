import logo from './logo.svg';
import './App.css';
import BookTable from './components/BookTable/bookTable'
import Header from './components/Header/header'
import { Container, Row, Col,Table, Button, Modal,ModalFooter,ModalHeader,ModalBody} from 'reactstrap';

import {useSelector,useDispatch} from 'react-redux';
import BookPopUp from './components/BookPopUp/BookPopUp'
import {togglePopup} from './redux/actions/popUpActions'

function App() {


  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(togglePopup())
  }

  return (
    <div>
      <Header/>
      <Container>
        <Row>
          <Col xs="9">  </Col>
          <Col  xs="3"> <Button onClick = {toggle} > Add Book</Button> </Col>
        </Row>
        <Row className='mt-5'>
        <BookTable/>
        </Row>
        <BookPopUp/>
      </Container>
      
      
      
    </div>
  );
}

export default App;
