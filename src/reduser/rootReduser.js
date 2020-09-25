import { ADD_BIKE, TO_RENTAL,  DELETE_BIKE, CANCEL_RENT, GET_DATA } from '../action/types';
 
const initialState = {
    allBike: [], 
    rentalBike: []
}

export default function rootReduser(state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            const data = action.payload
            const rentalBikes = []
            const allBIkes = []

            data.forEach(b => {
                if(b.isRental){
                    rentalBikes.push(b)    
                }else{
                    allBIkes.push(b)
                }
           })
       
            return state = {...state, allBike: allBIkes, rentalBike: rentalBikes}
        case ADD_BIKE:
           return state = {...state, allBike: [...state.allBike, action.payload]}; 

        case DELETE_BIKE: 
            let availableBike = state.allBike.concat()
            availableBike = availableBike.filter(b => b._id !== action.id)

            return state = {...state, allBike: availableBike}; 

        case TO_RENTAL: 

            const bikeForRental = state.rentalBike.concat()
            let allBikesArr = state.allBike.concat()

            let needBike = allBikesArr.find(b => b._id === action.id)
            allBikesArr = allBikesArr.filter(b => b._id !== action.id)
            needBike.isRental = !needBike.isRental; 
            bikeForRental.push(needBike)  
               

            return state = {...state, allBike: allBikesArr, rentalBike: bikeForRental }; 
             
        case CANCEL_RENT: 

            let bikesForRental = state.rentalBike.concat()
            const bikesALL = state.allBike.concat()

            let bike = bikesForRental.find(b => b._id === action.id )
            bikesForRental = bikesForRental.filter(b => b._id !== action.id)
            bike.isRental = !bike.isRental
            bikesALL.push(bike)  

            return state = {...state, allBike: bikesALL, rentalBike: bikesForRental }; 

        default:
           return state;
    }
}
