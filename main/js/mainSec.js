const inpText = document.querySelector('.input_text'); 
const inpNum = document.querySelector('.input_number'); 
const selectOpt = document.querySelector('#selected_value'); 
const form = document.querySelector('.form'); 
const bicyclesCards = document.querySelector('.bicycles-cards');
const bikeCards = document.querySelector('.bicycles-cards') 
const btnSubm = document.querySelector('.btn_submit'); 
const rentCards = document.querySelector('.rent-cards');

console.log(rentCards)
let allBikes = [
    {
        bikeName: 'Super Fast Bike', 
        bikeType: 'custom', 
        bikePrice: '$ 13.99', 
        isAvailable: true
       }, 
       {
        bikeName: 'Super Fast Bike', 
        bikeType: 'custom', 
        bikePrice: '$ 13.99', 
        isAvailable: true
      }, 
      {
        bikeName: 'Super Fast Bike', 
        bikeType: 'custom', 
        bikePrice: '$ 13.99', 
        isAvailable: true
     }
]; 

let rentBikes = []; 

function createDefaultPosition(){
    allBikes.forEach( bike => {
        
        bicyclesCards.insertAdjacentHTML('afterbegin', `
        <div class="bicycles-card">
            <div class="card-description">
                    <span>${bike.bikeName} / </span>
                    <span>${ bike.bikeType} / </span>
                    <span>${bike.bikePrice}</span>
                </div>
                <div class="btn-group">
                    <button class="btn-rent">Rent</button>
                    <button class="btn-del">Delete</button>
                </div>
            </div> `)

        const bicyclesCard = document.querySelector('.bicycles-card'); 
        const btnDel = document.querySelector('.btn-del'); 
        const btnRent = document.querySelector('.btn-rent'); 

        function rentCardAdd() {
            bicyclesCard.remove()
            btnRent.removeEventListener('click', rentCardAdd); 
            rentCards.insertAdjacentHTML('afterbegin', `
            <div class="rent-card">
                  <div>
                      <span> ${bike.bikeName} / </span>
                      <span>${bike.bikeType} / </span>
                      <span>${bike.bikePrice}</span>
                  </div>
                  <button class="btn-cancel_rent">Cencel rent</button>
              </div>
          `)
        }
        btnDel.addEventListener('click', () => {
            bicyclesCard.remove()
            
        }); 
       
        btnRent.addEventListener('click', rentCardAdd);  
    })
}

createDefaultPosition()

const btnCancelRent = document.querySelector('.btn-cancel_rent')
console.log(btnCancelRent)

class Bike {
    constructor(name, type, price){
        this.bikeName = name; 
        this.bikeType = type; 
        this.bikePrice = "$" +  price; 
        this.structure = `<div class="bicycles-card">
        <div class="card-description">
                <span>${this.bikeName} / </span>
                <span>${ this.bikeType} / </span>
                <span>${this.bikePrice}</span>
            </div>
            <div class="btn-group">
                <button class="btn-rent">Rent</button>
                <button class="btn-del">Delete</button>
            </div>
        </div>`; 
     }

     createBikeCard(){
       let bick = {
        "bike-name": this.bikeName, 
        'bike-type': this.bikeType, 
        'bike-price': this.bikePrice, 
        isAvailable: true
       }

        bicyclesCards.insertAdjacentHTML('afterbegin', this.structure )

        return  allBikes.push(bick);
     }

     delBikeCard(){
         const bicyclesCard = document.querySelector('.bicycles-card'); 
         bicyclesCard.remove()
     }

}

class AvailableBike extends Bike{
    constructor(...arg){
        super(...arg)
        this.rentCardStructure = `
         <div class="rent-card">
        <div>
            <span> ${this.bikeName} / </span>
            <span> ${this.bikeType} / </span>
            <span>$ ${this.bikePrice}</span>
           </div>
        <button class="btn-cancel_rent">Cncel rent</button>
        </div>
    
    </div>` 
    }

    createRentCard(){
        rentCards.insertAdjacentHTML('beforeend', `
        <div class="rent-card">
                <div>
                    <span> ${this.bikeName} / </span>
                    <span>${this.bikeType} / </span>
                    <span>${this.bikePrice}</span>
                </div>
                <button class="btn-cncel_rent">Cncel rent</button>
            </div>
        `); 
        
        const bicyclesCard = document.querySelector('.bicycles-card'); 
         bicyclesCard.remove(); 
    }

    cancelRent(){
        console.log('hello world');
        
    }
    }


function createAvailableBickCard(event){
    event.preventDefault(); 
    // добавить валидацию. 
    let availableBike = new AvailableBike(inpText.value, selectOpt.value, inpNum.value); 
    availableBike.createBikeCard(); 
    const btnRent = document.querySelector('.btn-rent'); 
    const btnDel = document.querySelector('.btn-del'); 
    
    btnDel.addEventListener('click', () => availableBike.delBikeCard())
    btnRent.addEventListener('click',  () => availableBike.createRentCard())
}

btnSubm.addEventListener('click', createAvailableBickCard)


