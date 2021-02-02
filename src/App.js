import logo from './logo.svg';
import './App.css';
import BookTable from './components/BookTable/bookTable'
import Header from './components/Header/header'
import { Container, Row, Col,Table } from 'reactstrap';
import React, { useState } from 'react';


function App() {
  const [books, setBooks] = useState([{name : "sdf", price : 12 , category: "sdf", description: "sdfdsf"},
                                      {name : "sdf", price : 12 , category: "sdf", description: "sdfdsf"},
                                      {name : "sdf", price : 12 , category: "sdf", description: "sdfdsf"}]);

  const [random] =  useState("HEYYY")
  return (
    <div>
      <Header/>

      <Container>
        { books ? <BookTable books = {books} random = {random}/> : null}
      </Container>
      
      
      
    </div>
  );
}

export default App;
