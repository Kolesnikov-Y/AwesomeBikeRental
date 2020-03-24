
const title = document.querySelector('.input_text'); 
const price = document.querySelector('.input_number'); 
const selectOpt = document.querySelector('#selected_value'); 
const form = document.querySelector('.form'); 
const bicyclesCards = document.querySelector('.bicycles-cards');
const bikeCards = document.querySelector('.bicycles-cards') 
const btnSubm = document.querySelector('.btn_submit'); 
const rentCards = document.querySelector('.rent-cards');

btnSubm.addEventListener('click', createNewBike)
title.addEventListener('focus', onFocusT); 
price.addEventListener('focus', onFocusP)

let allBikes = [
    {
        title: 'Super Fast Bike', 
        type: 'custom', 
        price: 13.99, 
        isAvailable: true, 
        id: 1, 
       }, 
       {
        title: 'Super Fast ', 
        type: 'custom', 
        price: 13.99, 
        isAvailable: true, 
        id: 2, 
      }, 
      {
        title: 'Super Bike', 
        type: 'custom', 
        price: 13.99, 
        isAvailable: true, 
        id: 3, 
     }
]; 


let rentBikes = []; 


const renderTemplate = (bike) => {
    if(bike.isAvailable){
        bicyclesCards.insertAdjacentHTML('beforeend', `
        <div class="bicycles-card" data-card="card" data-id=${bike.id} >
        <div class="card-description">
            <span>${bike.title} / </span>
            <span>${ bike.type} / </span>
            <span> $ ${bike.price}</span>
        </div>
        <div class="btn-group">
            <button class="btn-rent" data-btn="rent" data-id=${bike.id}>Rent</button>
            <button class="btn-del" data-btn="del" data-id=${bike.id}>Delete</button>
        </div>
        </div>`)

        } else {
        rentCards.insertAdjacentHTML('beforeend', `
        <div class="rent-card" data-card="rent-card" data-id=${bike.id} >
        <div>
            <span> ${bike.title} / </span>
            <span> ${bike.type} / </span>
            <span> $ ${bike.price}</span>
        </div>
        <button class="btn-cancel_rent" data-btn="cancel" data-id=${bike.id}>Cancel rent</button>
        </div>
        </div>` )
        } 
}

function render() {
    allBikes = allBikes.map( (bike) => {
        renderTemplate(bike)
        return bike
    })

} 

render();

function createNewBike(event) {
    event.preventDefault()

    if(title.value  === ''){
        title.classList.add('red')
        price.classList.add('red')
        btnSubm.setAttribute('disabled', "disabled")
        return false
    } else if(  price.value === ""){
        title.classList.remove('red')
        price.classList.add('red')
        btnSubm.setAttribute('disabled', "disabled")
        return false
    }else{
        title.classList.remove('red')
        price.classList.remove('red')
        
    }

    let bike = {
        title: title.value, 
        type: selectOpt.value, 
        price: price.value, 
        isAvailable: true, 
        id: allBikes.length + 1, 
    }

    fetch('http://localhost:8080/api/bicycle/create', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }, 
        body: JSON.stringify(bike)
    }).then(res => res.json(bike)) 
    .then(res => console.log(res))

    allBikes.push(bike)
    renderTemplate(bike) 
}

document.addEventListener('click', (event) => {
    const btnType = event.target.dataset.btn; 
    const id = +event.target.dataset.id; 
     
    if(btnType === 'rent') {
        let bike = allBikes.find( bike => bike.id === id) 
        console.log(bike)
        toRent(bike)

    } else  if(btnType === 'del') {
        let bike = allBikes.find( bike => bike.id === id)

            deleteCard(bike,event)

            fetch('http://localhost:8080/api/bicycle/del', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }, 
                body: JSON.stringify(bike)
            }).then(res => res.json(bike)) 
            
    } else if(btnType === 'cancel') {
        let bike = allBikes.find( bike => bike.id === id) 
        
        cancelRent(bike, event)
    }    
}) 

function deleteCard(bike, event) {
    event.target.parentNode.parentNode.remove()
} 

function toRent(bike) {
    bike.isAvailable = false
    rentBikes.push(bike); 
    renderTemplate(bike);   
    deleteCard(bike, event) 
    
    fetch('http://localhost:8080/api/bicycle/rent', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }, 
        body: JSON.stringify(bike)
    }).then(res => res.json(bike)) 
    .then(res => console.log(res)) 
}

function cancelRent(bike, event){
    bike.isAvailable = true
    allBikes.push(bike)
    renderTemplate(bike);
    event.target.parentNode.remove(); 
    fetch('http://localhost:8080/api/bicycle/cancel', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }, 
        body: JSON.stringify(bike)
    }).then(res => res.json(bike)) 
    .then(res => console.log(res)); 
}

function onFocusT () {
        title.value = "" 
        btnSubm.removeAttribute('disabled')
}

function onFocusP () {
        price.value = "" 
        btnSubm.removeAttribute('disabled')
}





function delFromDB (bike) {
    fetch('http://localhost:8080/api/bicycle/del' + bike.id, {
        method: 'DELETE',  
        body: JSON.stringify(bike)
    }).then(res => res.json(bike))
    .then(res => console.log(res)) 
}

function renderGetElem() {
    fetch( 'http://localhost:8080/api/bicycle/create')
    .then(status)
    .then(json)
    .catch(err => {
        console.log( "fetch Error", err);
    })
}

renderGetElem()

function status(response) {  
    if (response.status >= 200 && response.status < 300) {  
      return Promise.resolve(response)  
    } else {  
      return Promise.reject(new Error(response.statusText))  
    }  
  }

  
function json(response) {  
    
    return response.json()  
  }


// method GET and method DELETE

//  
    