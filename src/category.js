class Category {
    
    static all = []
    static container = document.getElementById("cat-container")

    constructor({id, name}){
        this.id = id 
        this.name = name

        this.element = document.createElement("button")

        Category.all.push(this)
    }

    render(){
        this.element.innerHTML = this.name
        this.element.id = `category-${this.id}`
        this.element.setAttribute("class", "cat-btn")
        return this.element
    }
    
    appendToDom(){
        Category.container.appendChild(this.render())
        this.addListeners()
    };

    addListeners(){
        this.element.addEventListener("click", this.handleClick)
    }

    handleClick = (e) => {
        let filteredCategory 
        Category.all.forEach(cat => {
            if(cat.element === this.element && !this.element.classList.contains("active")){
                cat.element.classList.add('active')
                filteredCategory = cat
            }
            else {
                cat.element.classList.remove('active')
            }
        })
        Item.filterByCategory(filteredCategory)
    }
    //clean state = user would click on one category && button does NOT contain active yet
    //turn on active + define filtered category
    //else (BUTTON ALREADY IS CLICKED)
    //so turn off active

   
   

}


//category class responsible for:
//remembering all categories
//setting up properties of each category
//html we want on dom for each category
//attach event listeners to category buttons