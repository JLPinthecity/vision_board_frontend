class Item {

    static all = []

    constructor(item, itemAttributes) {
        //setting up properties of item
        this.id = item.id
        this.title = itemAttributes.title
        this.description = itemAttributes.description
        this.image_url = itemAttributes.image_url
        this.url = itemAttributes.url
        this.category = itemAttributes.category
        Item.all.push(this)
    };
    

    renderItemCard() {
        //this is instance of item 
        return `
        <div data-id=${this.id}> 
          <img src=${this.image_url}>
          <a href="${this.url}" target="_blank"><h3>${this.title}</h3></a>
          <p><strong>Category:</strong> ${this.category.name}<p>
          <small class="text-muted">${this.description}</small>
        </div>`  
    };
    
}