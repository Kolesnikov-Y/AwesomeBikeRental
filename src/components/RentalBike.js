import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import RentalListItem from './RentalListItem'
import { connect } from 'react-redux'

 function RentalBike({bikes}) {
    return (
        <div className='rental-bike mt-2'>
            <div className="rental-bike-title mt-3">
                <span className="rental-bike-title">Rental bike: </span>
                <span className="counter">{bikes.length}</span>
            </div>

               {bikes.length ?(
                <TransitionGroup className="list-group list-group-flush mt-2">
                 {bikes.map( b => (
                    <CSSTransition 
                    classNames="list-group-item"
                    key={b._id}
                    timeout={1000}
                    >
                    <RentalListItem key={b._id} id={b._id} name={b.name} type={b.type}/> 
                    </CSSTransition>
                 ))  }
                 </TransitionGroup>): <h2 className="m-3">Нет Великов в Аренде</h2> }
        </div>
    ) 
}

const mapStateToProps = state => {
    console.log(state)
    return {
        bikes: state.rentalBike 
    }
}


export default connect(mapStateToProps, null)(RentalBike)