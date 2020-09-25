import React from 'react'
import { connect} from 'react-redux'
import {deleteBike, toRental} from '../action/actions'

function BikeList(props) {

    const rentalHandler = () => {
       props.toRental(props.id)
    }

    const deleteHandler = () => {
       props.deleteBike(props.id)
    }

    return (
            <li className='list-group-item available-bike-card d-flex justify-content-between align-items-center bike'>
                <div>{props.name}</div>
                <div>{props.type}</div>
                <div className="btn-group">
                    <button 
                    className="btn btn-success mr-2"
                    onClick={rentalHandler}
                    >to rental</button>
                    <button className="btn btn-danger ml-2"
                    onClick={deleteHandler}>delete</button> 
                </div>
            </li>    
    ) 
}

const mapStateToProps = (state) => {
    return {
        allBike: state.allBike, 
        rentalBike: state.rentalBike
    }
}

const mapDispatchToProps = {
    toRental, 
    deleteBike
}

export default connect(mapStateToProps, mapDispatchToProps)(BikeList)