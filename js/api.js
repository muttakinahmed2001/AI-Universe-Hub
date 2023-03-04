function loadData (dataLimit){
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data =>displayData(data.data.tools,dataLimit));
}



function displayData (cards,dataLimit){
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.textContent='';
    
    console.log(cards)
    const SeeMore = document.getElementById('btn-see-more');
    if(dataLimit){
      cards= cards.slice(0,6)
      SeeMore.classList.remove('d-none');
      
    }
     
    else{
      SeeMore.classList.add('d-none');
    }
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
          <button onclick="loadModalData(${card.id})" type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i class="fa-solid fa-circle-arrow-right"></i>
</button>
          </div>
          
          
          
        </div>
      </div>`
      cardsContainer.appendChild(cardDiv);
      toggle(false);
      
    })
    
}

function toggle (isLoading){
  const spinner = document.getElementById('spinner');
  if(isLoading===true){
    spinner.classList.remove('d-none')
  }
  else{
    spinner.classList.add('d-none');
  }
    
  
}
function loadModalData(id){
  fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
  .then(res => res.json())
  .then(data => console.log(data))
}

document.getElementById('btn-see-more').addEventListener('click',function(){
  loadData();
   
  
})


loadData(6);

toggle(true);

