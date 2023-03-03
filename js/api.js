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
        cardDiv.innerHTML=` <div class="card h-100">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 >Features</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <h5 class="card-title">${card.name}</h5>
        </div>
      </div>`
      cardsContainer.appendChild(cardDiv);
    })
   
}

loadData()