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





};

