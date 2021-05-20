const endPoint = "http://localhost:3000/api/v1/items"
const itemForm = document.getElementById("create-vision-board-item-form")

document.addEventListener('DOMContentLoaded', function() {
    getItems()
    itemForm.addEventListener("submit", (event) => createFormHandler(event))
}); 


function getItems(){
    fetch(endPoint)
    .then(r => r.json())
    .then(json => renderItems(json.data))
};

function renderItems(items){ 
    items.forEach(item => {
     const itemContainer = `
        <div data-id=${item.id}> 
          <img src=${item.attributes.image_url}>
          <a href="${item.attributes.url}" target="_blank"><h3>${item.attributes.title}</h3></a>
          <p><strong>Category:</strong> ${item.attributes.category.name}<p>
          <p font-size:10px;>${item.attributes.description}</p>
        </div>`;
        const visionBoardContainer = document.getElementById("vision-board-container")

        visionBoardContainer.innerHTML += itemContainer
        
    })
};

function createFormHandler(){

};

