import React from 'react'
import { connect } from 'react-redux'
import {cancelRent} from '../action/actions'

 function RentalListItem(props) {

    function backToAll() {
        props.cancelRent(props.id)
    }

    return (
                <li className="list-group-item d-flex justify-content-between align-items-center mt-2">
                   <div className="rental-bike-text"> <p>{props.name}</p> </div>
                   <div className="rental-bike-text"><p>{props.type}</p> </div>
                   <div className="btn-group">
                       <button
                        onClick={backToAll }
                       className="btn btn-warning">Cancel</button>
                    </div>
                </li>
    ) 
}

const mapDispatchToProps = {
    cancelRent
}

export default connect(null, mapDispatchToProps)(RentalListItem); 