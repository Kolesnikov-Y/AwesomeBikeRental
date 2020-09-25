import { ADD_BIKE, TO_RENTAL, DELETE_BIKE, CANCEL_RENT, GET_DATA } from "./types";
import Axios from "axios";

const API = 'http://localhost:8080/api/bicycle/allBike/'

export function addBike(bike) {
    return async dispatch => {
        Axios.post('http://localhost:8080/api/bicycle/allBike',{
            ...bike
          })
          .then(function (response) {
            console.log(response)
            dispatch({
                type: ADD_BIKE, 
                payload: bike
            })
          })
          .catch(function(err){
            console.error(err)
            dispatch({
                type: ADD_BIKE, 
                payload: bike
            })
          })   
    } 
}

export function getState() {
    return async dispatch => {
        try{
            const response = await Axios.get('http://localhost:8080/api/bicycle/allBike')
            const data = response.data; 

            dispatch( {
                type: GET_DATA, 
                payload: data
            })
        }catch (err) {
            console.error(err)
        }
    } 
}

export function toRental(id){
    return async dispatch => {
        try{
            dispatch({  type: TO_RENTAL, id})
            const res = await Axios.patch(API + `${id}`)
        }catch(err){
            console.error(err);
        }
       
    }
}

export function cancelRent(id) {
    return async dispatch => {
        try{
            dispatch({  type: CANCEL_RENT, id})
            const response = await Axios.patch(API + `${id}`)
            console.log(response);
        }catch(err){
            console.error(err);
        }
       
    }
}

export function deleteBike(id) {
    return async dispatch =>  {
        try{
            dispatch({type: DELETE_BIKE, id})
            const response = await Axios.delete(API + `${id}`)
            console.log("Delete This: ", response)
            console.log(id);
        }catch (e) {
            console.error(e);
        }
    }
}



