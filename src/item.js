class Item {

    static all = []

    constructor(item, itemAttributes){
    //setting up properties of item
        this.id = item.id
        this.title = itemAttributes.title
        this.description = itemAttributes.description
        this.image_url = itemAttributes.image_url
        this.url = itemAttributes.url
        this.category = itemAttributes.category


    //remembering all the items
    Item.all.push(this)

};

}