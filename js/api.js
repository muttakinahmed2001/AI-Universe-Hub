function loadData(dataLimit) {
  fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayData(data.data.tools, dataLimit));
}



function displayData(cards, dataLimit) {
  const cardsContainer = document.getElementById('cards-container');
  cardsContainer.textContent = '';

  console.log(cards)
  const SeeMore = document.getElementById('btn-see-more');
  if (dataLimit) {
    cards = cards.slice(0, 6)
    SeeMore.classList.remove('d-none');

  }

  else {
    SeeMore.classList.add('d-none');
  }
  cards.forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col');
    cardDiv.innerHTML = ` <div class="card h-100 p-3">
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
          <button onclick="loadModalData('${card.id}')" type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i class="fa-solid fa-circle-arrow-right"></i>
</button>
          </div>
          
          
          
        </div>
      </div>`
    cardsContainer.appendChild(cardDiv);
    toggle(false);

  })

}

function toggle(isLoading) {
  const spinner = document.getElementById('spinner');
  if (isLoading === true) {
    spinner.classList.remove('d-none')
  }
  else {
    spinner.classList.add('d-none');
  }

  //
}
const loadModalData = async id => {
  const url = ` https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhoneDetails(data.data);

}
function displayPhoneDetails(details) {
  console.log(details);
  const descriptionContainer = document.getElementById('description-container');
  descriptionContainer.innerHTML = ` <div class="col">
  <div class="card">
  
    <div class="card-body">
       
      <h4>  ${details.description} </h4>
      <div class="d-flex gap-4 ">
       <div class="d-flex  flex-column border border-light-subtle p-1">
       <div class=" fw-bold text-success-emphasis">${details.pricing[0].price ? details.pricing[0].price : 'no plan found'}/
       </div>
       <div>${details.pricing[0].plan ? details.pricing[0].plan : 'no plan found'}</div>
       </div>
       <div class="d-flex flex-col  flex-column border border-light-subtle p-1">
       <div class=" fw-bold text-warning">${details.pricing[1].price ? details.pricing[1].price : 'no plan found'}/
       </div>
       <div>${details.pricing[1].plan ? details.pricing[1].plan : 'no plan found'}</div>
       </div>
       <div class="d-flex flex-col  flex-column border border-light-subtle p-1">
       <div class=" fw-bold text-danger">${details.pricing[2].price ? details.pricing[2].price : 'no plan found'}/
       </div>
       <div>${details.pricing[2].plan ? details.pricing[2].plan : 'no plan found'}</div>
       </div>
       
  
     
       
     </div>
     <div class="d-flex justify-content-around gap-4" >
     <div >
     <h4>Features</h4>
     <ul>
           <li>${details.features[1].feature_name}</li>
          <li>${details.features[2].feature_name}</li>
          <li>${details.features[3].feature_name}</li>
        </ul>
       </div>
      <div>
      <h4>Integrations</h4>
      <ul>
      <li>${details.integrations[0] ? details.integrations[0] : 'no integration' }</li>
      <li>${details.integrations[1] ? details.integrations[1] : 'no integration' }</li>
      <li>${details.integrations[2] ? details.integrations[2] : 'no integration' }</li> 
        </ul>
       </div>
   </div>

    </div>
  </div>
</div>
<div class="col">
  <div class="card">
    <img src="${details.image_link[0]}
    " class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
</div>`

}





document.getElementById('btn-see-more').addEventListener('click', function () {
  loadData();


})


loadData(6);

toggle(true);

