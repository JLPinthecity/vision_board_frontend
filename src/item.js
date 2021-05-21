class Item {

    static all = []

    constructor({id, title, description, image_url, url, category}) {
        this.id = id
        this.title = title
        this.description = description
        this.image_url = image_url
        this.url = url
        this.category = category
        Item.all.push(this)
    };
    

    renderItemCard() {
        return `
        <div data-id=${this.id}> 
          <img src=${this.image_url}>
          <a href="${this.url}" target="_blank"><h3>${this.title}</h3></a>
          <p><strong>Category:</strong> ${this.category.name}<p>
          <small class="text-muted">${this.description}</small>
        </div>`  
    };
    
}





//item class responsible for:
//remembering all items
//setting up properties of each item 
//html we want on dom for each item
//attach event listeners to each item