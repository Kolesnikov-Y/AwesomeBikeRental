const inpText = document.querySelector('.input_text'); 
const inpNum = document.querySelector('.input_number'); 
const selectOpt = document.querySelector('#selected_value'); 
const form = document.querySelector('.form'); 
const bicyclesCards = document.querySelector('.bicycles-cards');
const bikeCards = document.querySelector('.bicycles-cards') 
const btnSubm = document.querySelector('.btn_submit'); 
const rentCards = document.querySelector('.rent-cards');

console.log(rentCards)

btnSubm.addEventListener('click', createAvailableCard)

let allBikes = [
    {
        bikeName: 'Super Fast Bike', 
        bikeType: 'custom', 
        bikePrice: '$ 13.99', 
        isAvailable: true
       }, 
       {
        bikeName: 'Super Fast ', 
        bikeType: 'custom', 
        bikePrice: '$ 13.99', 
        isAvailable: true
      }, 
      {
        bikeName: 'Super Bike', 
        bikeType: 'custom', 
        bikePrice: '$ 13.99', 
        isAvailable: true
     }
]; 

let rentBikes = []; 


class Bike {
    constructor(name, type, price, isAvailable){ 
        this.bikeName = name; 
        this.bikeType = type; 
        this.bikePrice = "$" +  price; 
        this.isAvailable = isAvailable 
        this.bicyclesCard = `
        <div class="bicycles-card">
            <div class="card-description">
                <span>${this.bikeName} / </span>
                <span>${ this.bikeType} / </span>
                <span>${this.bikePrice}</span>
            </div>
            <div class="btn-group">
                <button class="btn-rent">Rent</button>
                <button class="btn-del">Delete</button>
            </div>
        </div>`
        this.rentCard = `
        <div class="rent-card">
            <div>
                <span> ${this.bikeName} / </span>
                <span> ${this.bikeType} / </span>
                <span>$ ${this.bikePrice}</span>
            </div>
            <button class="btn-cancel_rent">Cancel rent</button>
            </div>
        </div>`
     }

     getTempalte() {
         if(this.isAvailable){
          return  this.bicyclesCard
         } else {
          return this.rentCard
         }
     }

     create() {
       let bike = {
        "bike-name": this.bikeName, 
        'bike-type': this.bikeType, 
        'bike-price': this.bikePrice, 
        isAvailable: true
       }

        bicyclesCards.insertAdjacentHTML('beforeend', this.getTempalte())

        allBikes.push(bike);
     }

     delete(){
         const bicyclesCard = document.querySelector('.bicycles-card'); 
         bicyclesCard.remove()
     }

     toRent() {
       console.log('hello');
     }

     cancel(){
        console.log('hello');

     }

}

class AvailableBike extends Bike{
    constructor(...arg){
        super(...arg)
    }
}

function createAvailableCard(event){
    event.preventDefault(); 
    // добавить валидацию. 
    let availableBike = new AvailableBike(inpText.value, selectOpt.value, inpNum.value, true); 
    availableBike.create(); 
    const btnDel = document.querySelector('.btn-del');
    btnDel.addEventListener('click', () => {
            console.log('hello');
            availableBike.delete()
        }) 
}

function renderListsBike() {
    allBikes = allBikes.map( e => {
          const bike = new AvailableBike(e.bikeName, e.bikeType, e.bikePrice, e.isAvailable);
          bike.create()
          
          return bike
          })     
          const btnDel = document.querySelector('.btn-del');
          btnDel.addEventListener('click', () => {
                  console.log('hello');
                  bike.delete()
              }) 
     }
  renderListsBike()


    //     allBikes.forEach( bike => {
            
    //         bicyclesCards.insertAdjacentHTML('afterbegin', `
    //         <div class="bicycles-card">
    //             <div class="card-description">
    //                     <span>${bike.bikeName} / </span>
    //                     <span>${ bike.bikeType} / </span>
    //                     <span>${bike.bikePrice}</span>
    //                 </div>
    //                 <div class="btn-group">
    //                     <button class="btn-rent">Rent</button>
    //                     <button class="btn-del">Delete</button>
    //                 </div>
    //             </div> `)
    
    //         const bicyclesCard = document.querySelector('.bicycles-card'); 
    //         const btnDel = document.querySelector('.btn-del'); 
    //         const btnRent = document.querySelector('.btn-rent'); 
    
    //         function rentCardAdd() {
    //             bicyclesCard.remove()
    //             btnRent.removeEventListener('click', rentCardAdd); 
    //             rentCards.insertAdjacentHTML('beforeend', `
    //             <div class="rent-card">
    //                   <div>
    //                       <span> ${bike.bikeName} / </span>
    //                       <span>${bike.bikeType} / </span>
    //                       <span>${bike.bikePrice}</span>
    //                   </div>
    //                   <button class="btn-cancel_rent">Cencel rent</button>
    //               </div>
    //           `)
    //         }
    //         btnDel.addEventListener('click', () => {
    //             bicyclesCard.remove()
                
    //         }); 
           
    //         btnRent.addEventListener('click', rentCardAdd); 
    
    
    //     })
    // }
    
    // createDefaultPosition()