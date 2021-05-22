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
   
        Item.all.push(this)
    }

    render() {
        this.element.innerHTML = `
            <img src=${this.image_url}>
            <a href="${this.url}" target="_blank"><h3>${this.title}</h3></a>
            <p><strong>Category:</strong> ${this.category.name}<p>
            <small class="text-muted">${this.description}</small>
        `  
        return this.element //returning it would mke it easier to attach method to dom
    };

  
    appendToDom(){
      this.render()
      Item.container.appendChild(this.element)
    }

}

//item class responsible for:
//remembering all items
//setting up properties of each item 
//html we want on dom for each item
//attach event listeners to each item