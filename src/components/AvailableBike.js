import React from 'react'
import BikeList from './BikeList'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import { connect } from 'react-redux'

function AvailableBike({bikes}) {
    return (
        <div className='available-bike mt-2'>
            <div className="available-bike-title mt-3">
                <span className="available-bike-title">Available bike: </span>
                <span className="counter">{bikes.length}</span>
            </div>

                 { bikes.length ?(
                    <TransitionGroup component="ul" className="list-group list-group-flush mt-2" >
                        { bikes.map(b =>(
                    <CSSTransition
                        key={b._id} 
                        classNames="list-group-item"
                        timeout={1000}>
                        <BikeList name={b.name} id={b._id} type={b.type} key={b._id}/>
                    </CSSTransition>
                   ))}
                    </TransitionGroup>
                 ): <h2 className="m-3">Нет доступных великов</h2>     
                }            
        </div>
    ) 
}

const mapStateToProps = (state) => {
    return {bikes: state.allBike}
}

export default connect(mapStateToProps, null)(AvailableBike)