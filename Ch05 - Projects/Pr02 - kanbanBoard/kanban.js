let addBtn = document.querySelector(".add-btn");
let removeBtn = document.querySelector(".remove-btn");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let textAreaCont = document.querySelector(".textArea-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");
// console.log(allPriorityColors);

let colors = ["lightpink" , "lightgreen" , "lightblue" , "black"];

let toolbarColors = document.querySelectorAll(".color-box");

let addTaskFlag = false;
let removeTaskFlag = false;

let modalPriorityColor = "lightpink";

let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";

let ticketsArr = [];


if (localStorage.getItem("tickets")) {
    ticketsArr = JSON.parse(localStorage.getItem("tickets"));

    ticketsArr.forEach(function(ticket) {
        createTicket(ticket.ticketTask , ticket.ticketColorClass , ticket.ticketID);
    });
}


addBtn.addEventListener("click" , function() {
    addTaskFlag = !addTaskFlag;
    // console.log(addTaskFlag);

    if (addTaskFlag == true) {
        modalCont.style.display = "flex";
    } else {
        modalCont.style.display = "none";
    }
});


modalCont.addEventListener("keydown" , function(e) {
    let key = e.key;
    // console.log(key);
    if (key === "Shift") {
        // console.log("ticket created");
        createTicket(textAreaCont.value , modalPriorityColor);
    }
});


// Add tasks according to Active color
allPriorityColors.forEach(function(colorElem) {
    colorElem.addEventListener("click" , function() {
        // console.log("Clicked color ::: " , colorElem);
        allPriorityColors.forEach(function(priorityColorElem) {
            priorityColorElem.classList.remove("active");
        });
        colorElem.classList.add("active");

        modalPriorityColor = colorElem.classList[0];
        // console.log("color ::: " , modalPriorityColor);
    });
});


// This function generates a ticket
function createTicket(ticketTask , ticketColorClass , ticketID) {
    let id = ticketID || shortid();   //generates unique id for tickets (created from shortid cdn)
    // console.log("ID is ::: " , id);
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class" , "ticket-cont");
    ticketCont.innerHTML = `<div class="ticket-color-cont ${ticketColorClass}">

            </div>

            <div class="ticket-id">
                ${id}
            </div>

            <div class="ticket-task">
                ${ticketTask}
            </div>

            <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i>    
            </div>`;

            mainCont.appendChild(ticketCont);
            modalCont.style.display = "none";

            handleLock(ticketCont , id);   //lock
            handleRemoval(ticketCont);   //ticket removal
            handleColor(ticketCont);   //changing color bands

            if (!ticketID) {
                ticketsArr.push({ticketTask , ticketColorClass , ticketID:id});

                // BY default , Javascript will not allow us to read the data from localStorage,
                // so we use "JSON.stringify" to convert the data in form of a string and then read.
                // We will not be able to read the data in the form of Object or an Array.
                localStorage.setItem("tickets" , JSON.stringify(ticketsArr));
            }
            // console.log(ticketsArr);
}


// handling Lock
function handleLock(ticket , id) {
    let ticketLockElem = ticket.querySelector(".ticket-lock");
    let ticketTaskArea = document.querySelector(".ticket-task");

    let ticketLockIcon = ticketLockElem.children[0];
    ticketLockIcon.addEventListener("click" , function() {
        let ticketIdx = getIdx(id);
        console.log(ticketIdx);

        if (ticketLockIcon.classList.contains(lockClass)) {
            ticketLockIcon.classList.remove(lockClass);
            ticketLockIcon.classList.add(unlockClass);
            
            // We should be allowed to edit when this unlock class is appended...
            //For this we use ***"contenteditable"*** method --> this is used to edit a content within a text area...
            ticketTaskArea.setAttribute("contenteditable" , "true");
        } else {
            ticketLockIcon.classList.remove(unlockClass);
            ticketLockIcon.classList.add(lockClass);
            ticketTaskArea.setAttribute("contenteditable" , "false");
        }

        ticketsArr[ticketIdx].ticketTask = ticketTaskArea.innerText;
        localStorage.setItem("tickets" , JSON.stringify(ticketsArr));
    });
}


// handling removal of ticket
removeBtn.addEventListener("click" , function() {
    removeTaskFlag = !removeTaskFlag;

    if (removeTaskFlag === true) {
        alert("Delete button Activated");
        removeBtn.style.color = "red";
    } else {
        alert("Delete button Deactivated");
        removeBtn.style.color = "white";
    }
});


function handleRemoval(ticket) {
    ticket.addEventListener("click" , function() {
        if (!removeTaskFlag) {
            //console.log("Flag is ::: " , removeTaskFlag);
            return;
        }
        ticket.remove();
    });
}


// handle color band
function handleColor(ticket) {
    let ticketColorBand = ticket.querySelector(".ticket-color-cont");
    ticketColorBand.addEventListener("click" , function() {
        let currentColor = ticketColorBand.classList[1];
        //console.log("current color is ::: " , currentColor);

        let currentColorIdx = colors.findIndex(function(color) {
            return currentColor === color;
        });
        //console.log("currentColorIndex is ::: " , currentColorIdx , currentColor);
        currentColorIdx++;

        let newTicketColorIdx = currentColorIdx % colors.length;
        let newTicketColorValue = colors[newTicketColorIdx];

        ticketColorBand.classList.remove(currentColor);
        ticketColorBand.classList.add(newTicketColorValue);
    });
}


// Get tasks based on color filter
for (let i = 0 ; i < toolbarColors.length ; i++) {
    toolbarColors[i].addEventListener("click" , function() {
        // console.log(toolbarColors[i].classList[0]);
        let selectedToolboxColor = toolbarColors[i].classList[0];

        let filteredTickets = ticketsArr.filter(function(ticket) {
            return selectedToolboxColor === ticket.ticketColorClass;
        });
        console.log(filteredTickets);

        let allTickets = document.querySelectorAll(".ticket-cont");
        // console.log(allTickets);

        for (let i = 0 ; i < allTickets.length ; i++) {
            allTickets[i].remove();
        }

        filteredTickets.forEach(function(filteredTicket) {
            createTicket(filteredTicket.ticketTask , filteredTicket.ticketColorClass , filteredTicket.ticketID);
        });
    });
}


function getIdx(id) {
    let ticketIdx = ticketsArr.findIndex(function(ticketObj) {
        return ticketObj.ticketID === id;
    });
    return ticketIdx;
}
