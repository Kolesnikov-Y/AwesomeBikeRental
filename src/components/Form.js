import React, { useState } from 'react'; 
import {connect} from 'react-redux'
import {addBike} from '../action/actions'
import Axios from 'axios';

 function Form({addBike}) {

  let [defaultValue, setDefaultValue] = useState({
    text: '', 
    type: 'normal'
  })

  function submitHandeler(e) {
    e.preventDefault()
    if(!defaultValue.text){
      return false
    }else{
      let bike = {
        name: defaultValue.text,
        type: defaultValue.type,
        isRental: false, 
        _id: Math.random()
      }

      addBike(bike); 

      setDefaultValue({...defaultValue, text: ""})
    }
  }

  const changeHandler = (e) => {
    setDefaultValue({...defaultValue, [e.target.name]: e.target.value})
  }

    return (
      <form className="form d-flex justify-content-center align-items-center"
            onSubmit={submitHandeler}>

        <div className="form-row form-wrap d-flex justify-content-between">
          <div className="col-4">
            <input type="text"
                className="form-control"
                placeholder="First name"
                onChange={changeHandler}
                value={defaultValue.text}
                name="text"/>
          </div>

          <div className="col-3">
            <select  className="custom-select" 
            value={defaultValue.type}
            name='type'
            onChange={changeHandler}>
              <option value="normal" >normal</option>
              <option value="extra">extra</option>
              <option value="super">super</option>
              <option value="titan">titan</option>
            </select>
          </div>

          <div className="col-1">
          <button type="submit" className='btn btn-primary'>CHEK</button>
          </div>
        
        </div>
      </form>
    )
}

export default connect(null, {addBike})(Form);