class Category {
    
    static all = []

    constructor({id, name}){
      this.id = id 
      this.name = name

      this.element = document.createElement("button")

      Category.all.push(this)
    }

    render(){
        
    }

    appendToDom(){

    };

}


//category class responsible for:
//remembering all categories
//setting up properties of each category
//html we want on dom for each category
//attach event listeners to category buttons