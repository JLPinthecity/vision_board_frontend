const endPoint = "http://localhost:3000/api/v1/items"

document.addEventListener('DOMContentLoaded', function() {
    getItems()
}); 

function getItems(){
    fetch(endPoint)
    .then(r => r.json())
    .then(json => renderItems(json.data))
};

// function renderItems(items){ #items is 
//     items.forEach(item => {
//         const item = 
          
//     })
//     debugger
// };

