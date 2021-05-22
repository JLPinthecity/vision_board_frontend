class CategoryApi {

    constructor (){
        this.endPoint = "http://localhost:3000/api/v1/categories"
    }

    getCategories(){
        fetch(this.endPoint)
        .then(r => r.json())
        .then(json => {
            debugger
        })
    }

}