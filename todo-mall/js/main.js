window.onload = function () {
        //Textinput 
        let syssla = document.getElementById("task");
        //lägger till knappen
        let button = document.getElementById("add");
        //Listan
        let list = document.getElementById("unCompletedList"); //ul
        //Knapp
        let edit = document.createElement("button");

        button.addEventListener("click", function () {
            console.log("manager");
            let taskitem = document.createElement("input");
            taskitem.value = syssla.value;
            taskitem.disabled = true; //Skapar sysslor
            let listitem = document.createElement("li"); //listar
            let deletebutton = document.createElement("button");//Ta bort knappen 
            deletebutton.innerHTML = "radera"; listitem.appendChild(taskitem);
            listitem.appendChild(deletebutton);
            list.appendChild(listitem);
            //knapp funktion
            let edit = document.createElement("button");
            
            //gör raderarknappen tryckbar
            deletebutton.addEventListener("click", function () {
                deletebutton.parentNode.remove();
            })
        })
    }