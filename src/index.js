const endPoint = "http://localhost:3000/api/v1/items"
const itemForm = document.getElementById("create-vision-board-item-form")

document.addEventListener('DOMContentLoaded', function() {
    getItems();
    itemForm.addEventListener("submit", (event) => createFormHandler(event));
}); 


function getItems(){
    fetch(endPoint)
    .then(r => r.json())
    .then(json => renderItems(json))
};

function renderItems(arg){ 
    const items = arg["data"]
    items.forEach(item => {
        debugger
       let newItem = new Item({id: item.id, ...item.attributes}) 
    //    document.getElementById("vision-board-container").innerHTML += newItem.renderItemCard()

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
    .then(item => {
        let newItem = new Item(item, item.attributes)
        document.getElementById("vision-board-container").innerHTML += newItem.renderItemCard()

    })
};


