class itemApi {

    static endPoint = "http://localhost:3000/api/v1/items"

    static getItems(){
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

