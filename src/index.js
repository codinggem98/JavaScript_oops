
// constructor
function Book(name, author, type) {

    this.name = name;
    this.type = type;
    this.author = author;

}

// Display Constructor
function Display() {

}

// Add methods to display prototype
Display.prototype.add = function (book) {
   let tableBody = document.getElementById('tableBody')
        let uiString = `
                      <tr>    
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>
        `
       tableBody.innerHTML += uiString 
};


Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
};

// show function
Display.prototype.show = function (type) {
    let message = document.getElementById('message')
    let uiString = `
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">${type}</span>
  </button>
    `
    message.innerHTML = uiString
  
};

// validate function
Display.prototype.validate = function (book) {
    if(book.name.length>2 || book.name.author>2){
        return true
    }else{
        return false
    }
};

// Add Submit event Listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit)


// libraryFormSubmit
function libraryFormSubmit(e) {
    e.preventDefault();
  
    let name = document.getElementById('bookName').value
    let author = document.getElementById('author').value
    let type;
    let fiction = document.getElementById('fiction').value
    let programming = document.getElementById('programming').value
    let Cooking = document.getElementById('Cooking').value


    if (fiction) {
        type = fiction
    } else if (programming) {
        type = programming
    } else if (Cooking) {
        type = Cooking
    }
    let book = new Book(name, author, type)
    let display = new Display();
    if(display.validate(book)){
            
        display.add(book);
        display.clear();
        // display.success();
    }else{
        // show error to the user
        display.show("some error occured");
    }
    


}



