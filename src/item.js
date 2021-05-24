class Item {

    static all = []
    static container = document.getElementById("vision-board-container")
    
    constructor({id, title, description, image_url, url, category}) {
        this.id = id
        this.title = title
        this.description = description
        this.image_url = image_url
        this.url = url
        this.category = category

        this.element = document.createElement("div") //set the html element that will contain item card
        this.element.setAttribute("data-id", this.id)

        this.element.addEventListener('click', this.handleEditorDelete)

        Item.all.push(this)
    }

    render() {
        this.element.innerHTML = `
            <img src=${this.image_url}>
            <a href="${this.url}" target="_blank"><h3>${this.title}</h3></a>
            <small class="text-muted">${this.description}</small><br><br>
            <strong>Category:</strong> ${this.category.name}
            <br><br>
            <button class="edit" data-id=${this.id}>Edit</button>
            <button class="delete" data-id=${this.id}>Delete</button>
            <br><br>
        `  
        return this.element //returning it would mke it easier to attach method to dom 
    };

    appendToDom(){
      this.render()
      Item.container.appendChild(this.element)
    }

    static filterByCategory(filteredCategory){
        if(filteredCategory){
            const filteredItems = Item.all.filter((item) => {
                return item.category.id === parseInt(filteredCategory.id)
              
            })
            //we want to return only filtered items
            Item.container.innerHTML = ""
            filteredItems.forEach(filteredItem => filteredItem.appendToDom())
        }
        else {
            Item.container.innerHTML = ""
            Item.all.forEach(i => i.appendToDom())
        }
    }

     handleEditorDelete = (e) => {
        e.preventDefault()
        if(e.target.innerText === "Delete"){
           this.deleteItem(e)
        }
        else if(e.target.innerText === "Edit"){
            // e.target.innerText = "Save"
            this.createEditForm(e.target)
        }
        else if(e.target.innerText === "Save"){
            e.target.innerText = "Edit"
            this.saveEdits(e.target)
        }
    
     }

    saveEdits(saveButton){
        const editedItem = saveButton.parentElement //the whole div
        this.title = editedItem.querySelector(".edit-title").value
        this.description = editedItem.querySelector(".edit-description").value
        
        itemApi.editItem(this)
    }

    //if edit
    //event: patch
    //dom: turn button to save and turn text into input fields
    
    createEditForm(editButton){
        const itemCard = editButton.parentElement
        itemCard.innerHTML = 
        `
            <img src=${this.image_url}>
            <a href="${this.url}" target="_blank"><h3><input type="text" class="edit-title" value="${this.title}"></h3></a>
            <small class="text-muted"><input type="text" class="edit-description" value="${this.description}"></small><br><br>
            <strong>Category:</strong> ${this.category.name}

            <br><br>
            <button class="edit" data-id=${this.id}>Save</button>
            <button class="delete" data-id=${this.id}>Delete</button>
            <br><br>
        `  
    }

     //optimistic rendering
    deleteItem(e){
        this.element.remove()
        const id = this.id
        itemApi.deleteItem(id)
 
        //if delete, remove element
        //submit fetch request to delete
     }   
            
}
        
//item class responsible for:
//remembering all items
//setting up properties of each item 
//html we want on dom for each item
//attach event listeners to each item
//add filter by category method 