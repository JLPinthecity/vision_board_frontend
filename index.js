const itemForm = document.getElementById("create-vision-board-item-form")
const endPoint = "http://localhost:3000/api/v1/items"
const itemApi = new ItemApi()
const categoryApi = new CategoryApi()

document.addEventListener('DOMContentLoaded', function() {
    itemApi.getItems();
    categoryApi.getCategories();
    itemForm.addEventListener("submit", (event) => createFormHandler(event));
    
}); 

function createFormHandler(event){
  event.preventDefault()
  itemApi.createItem()
  event.target.reset()
};










