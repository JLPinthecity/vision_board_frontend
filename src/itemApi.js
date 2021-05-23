class ItemApi {

    constructor (){
        this.endPoint = "http://localhost:3000/api/v1/items"
    }

    getItems(){
        fetch(this.endPoint)
        .then(r => r.json())
        .then(json => {
            json["data"].forEach(item => {
                const newItem = new Item({id: item.id, ...item.attributes}) 
                newItem.appendToDom()
            })
        })
    };

    createItem(){
        const title = document.getElementById("item-title").value
        const description = document.getElementById("item-description").value
        const image_url = document.getElementById("item-link").value
        const url = document.getElementById("item-url").value
        const categorySelection = document.getElementById("categories").value
        const category_id = parseInt(categorySelection)
   
        const formData = {title, description, image_url, url, category_id};
       
        const configObj = {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
           },
           body: JSON.stringify(formData)
       };
    
        fetch(this.endPoint, configObj)
        .then(r => r.json())
        .then(json => {
            const i = new Item({id: json.data.id, ...json.data.attributes})
            i.appendToDom()
        })
};

    deleteItem = (id) => {
        const configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        };
        fetch(`http://localhost:3000/api/v1/items/${id}`, configObj)
        .then(r => r.json())
        .then(json => alert(json.message))
    }

    editItem = (editedItem) => {
        const editedTitle = editedItem.querySelector(".edit-title").value
        const editedDesc = editedItem.querySelector(".edit-description").value
        const itemId = parseInt(editedItem.dataset.id)
   
        const editFormData = {title: editedTitle , description: editedDesc, id: itemId};

        debugger
        const configObj = {
           method: "PATCH",
           headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
           },
           body: JSON.stringify(editFormData)
       
       };
    
        fetch(`http://localhost:3000/api/v1/items/${id}`, configObj)
        .then(r => r.json())
        .then(json => {
            // const i = new Item({id: json.data.id, ...json.data.attributes})
            // i.appendToDom()
        })
    
        debugger
    }


};







