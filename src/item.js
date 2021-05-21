class Item {

    static all = []

    constructor({title, description, image_url, url, category_id}){
    //setting up properties of item
    this.title = title
    this.description = description
    this.image_url = image_url
    this.url = url
    this.category_id = category_id


    //remembering all the items
    Item.all.push(this)

};