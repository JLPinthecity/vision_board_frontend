const endPoint = "http://localhost:3000/api/v1/items"

document.addEventListener('DOMContentLoaded', function() {
    getItems()
}); 

function getItems(){
    fetch(endPoint)
    .then(r => r.json())
    .then(json => renderItems(json.data))
};

function renderItems(items){ 
    items.forEach(item => {
     const itemContainer = `
        <div id="item" data-id=${item.id}> 
          <img src=${item.attributes.image_url}>
          <a href="${item.attributes.url}"><h3>${item.attributes.title}</h3></a>
          <p><strong>Category:</strong> ${item.attributes.category.name}<p>
          <p font-size:10px;>${item.attributes.description}</p>
        </div>`;
        const visionBoardContainer = document.getElementById("vision-board-container")

        visionBoardContainer.innerHTML += itemContainer
        
    })





};

