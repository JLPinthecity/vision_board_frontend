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
            <p><strong>Category:</strong> ${this.category.name}<p>
            <small class="text-muted">${this.description}</small>
            <br><br>
            <button class="edit" data-id=${this.id}>Edit</button>
            <button class="delete" data-id=${this.id}>Delete</button>
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
    
     }

     //optimistic rendering
     deleteItem(e){
        this.element.remove()
        const id = this.id
        itemApi.deleteItem(id)
        debugger
        //if delete, remove element
        //submit fetch request to delete
     }
        
            
}
        
        //if edit
        //event: patch
        //dom: turn button to save 



 

//item class responsible for:
//remembering all items
//setting up properties of each item 
//html we want on dom for each item
//attach event listeners to each item

//add filter by category method 