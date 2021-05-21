const endPoint = "http://localhost:3000/api/v1/items"
const itemForm = document.getElementById("create-vision-board-item-form")

document.addEventListener('DOMContentLoaded', function() {
    getItems();
    itemForm.addEventListener("submit", (event) => createFormHandler(event));
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

function createFormHandler(event){
  event.preventDefault()
  const titleInput = document.getElementById("item-title").value
  const descriptionInput = document.getElementById("item-description").value
  const imageInput = document.getElementById("item-link").value
  const itemLink = document.getElementById("item-url").value
  const categorySelection = document.getElementById("categories").value
  const categoryId = parseInt(categorySelection)
   
  postFetchRequest(titleInput, descriptionInput, imageInput, itemLink, categoryId)
};

function postFetchRequest(title, description, image_url, url, category_id){
    const formData = {title, description, image_url, url, category_id};
   
    const configObj = {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
       },
       body: JSON.stringify(formData)
   };

    fetch(endPoint, configObj)
    .then(r => r.json())
    .then(item => renderNewItem(item.data))
};

function renderNewItem(item){
    const newItemAdded = `
    <div data-id=${item.id}> 
      <img src=${item.attributes.image_url}>
      <a href="${item.attributes.url}" target="_blank"><h3>${item.attributes.title}</h3></a>
      <p><strong>Category:</strong> ${item.attributes.category.name}<p>
      <p font-size:10px;>${item.attributes.description}</p>
    </div>`;
    const visionBoardContainer = document.getElementById("vision-board-container")

    visionBoardContainer.innerHTML += newItemAdded

  }
  
  