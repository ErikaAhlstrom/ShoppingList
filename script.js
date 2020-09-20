

document.addEventListener('DOMContentLoaded', function(e) {
    let list = document.getElementById('list');
    list.addEventListener('click', function(event) {
      if (event.target.tagName == 'SPAN') {
        event.target.parentNode.remove();
      }
    })

    let btnSend = document.getElementById('btnSend');
    btnSend.addEventListener('click', function(e) {

        let message = document.getElementById('message');
        let new_message = document.createElement('div');
        new_message.innerHTML = message.value;
        let delete_button = document.createElement('span');
        delete_button.innerHTML = 'Ta bort';
        new_message.appendChild(delete_button);
        let div = document.getElementById('list');
        div.appendChild(new_message);
        message.value = '';
        message.focus();

        // Gör en linje igenom texten när man klickar på new_message
        new_message.addEventListener("click", function(e){
        // Skapar en ny class åt new_message som gör att den bli genomstruken när man klickar.
        new_message.classList.add("new_messageLinethrough");
        
        });

    })

})








/* 

===================================================
                    GAMLA
===================================================

let button = document.getElementById('button');

button.addEventListener('click', function(e) {  
    let item = document.getElementById('list');  
    let newItem = document.createElement('li');
    
    newItem.innerHTML = item.value; 
    let ul = document.getElementById('myList');
    ul.appendChild(newItem);
    item.value = "";
    item.focus();

    let items = document.getElementsByTagName("li");

    let delete_button = document.createElement("span");
    delete_button.innerHTML = "Ta bort";


    //// Nu slipper vi ha en loop som går igenom alla element.
    //// Tittar i hela ul elementet isället.
    ul.addEventListener('click', function(event){
        //// Detta för att inte hela ul ska råka försvinna om vi klickar där.
        if(event.target.tagName == "LI") {
            event.target.remove();
        }
        
    })
})

items.addEventListener("click", function(event){
    if (event.target.tagName == "SPAN") {
        event.target.parentNode.remove();
    }
})



    /*

    //// Skapar en loop som lägger eventlistener med click på varje
    //// item i HTML kollektionen items. När man sen klickar
    //// försvinner det itemet man klickar på.

    for (let i of items) {
        i.addEventListener("click", function(event) {

            event.target.remove();
            // samma sak som this.remove();
            // samma sak som i.remove();

        })
    } 

    */

 /*   //// Tar bort den newItem som man clickar på
   newItem.addEventListener('click', function(e){
        newItem.remove(); 
    }) */
 