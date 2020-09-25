import React from 'react';
import {connect} from "react-redux"
import './App.css';
import Form from './components/Form';
import RentalBike from './components/RentalBike';
import AvailableBike from './components/AvailableBike';
import {getState} from "./action/actions"
import { useEffect } from 'react';

function App(props) {

  useEffect(  () =>  {
    props.getState()
  }, [])

  return (
    <div className="container">
      <h1>Awesome bike rental</h1>
        <Form/> 
        <RentalBike/>
        <AvailableBike/>
    </div>
  );
}
 

const mapDispatchToProps = {getState}

export default connect(null, mapDispatchToProps)(App);
