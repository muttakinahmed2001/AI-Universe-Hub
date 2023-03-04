function loadData (){
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data =>displayData(data.data.tools));
}

function displayData (cards){
    const cardsContainer = document.getElementById('cards-container');
    console.log(cards)
    cards.forEach(card =>{
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML=` <div class="card h-100 p-3">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 >Features</h5>
          <ol>
          <li> ${card.features[0]}</li>
          <li> ${card.features[1]}</li>
          <li> ${card.features[2]}</li>
          </ol>
          <hr>
           
          <h5 class="card-title">${card.name}</h5>
          <div class="d-flex justify-content-between">
          <p><i class="fa-regular fa-calendar-days"></i> ${card.published_in}</p>
          <button><i class="fa-solid fa-circle-arrow-right"></i></button></div>
          
        </div>
      </div>`
      cardsContainer.appendChild(cardDiv);
      toggle(false);
    })
   
}

function toggle (isLoading){
  const spinners = document.getElementById('spinners');
  if(isLoading===true){
    spinners.classList.remove('d-none')
  }
  else{
    spinners.classList.add('d-none');
  }
    
  
}

loadData()
toggle(true);