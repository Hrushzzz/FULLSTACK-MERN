let addBtn = document.querySelector(".add-btn");
let removeBtn = document.querySelector(".remove-btn");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let textAreaCont = document.querySelector(".textArea-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");
// console.log(allPriorityColors);

let addTaskFlag = false;
let removeTaskFlag = false;

let modalPriorityColor = "lightpink";

let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";

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
function createTicket(ticketTask , ticketColorClass) {
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class" , "ticket-cont");
    ticketCont.innerHTML = `<div class="ticket-color ${ticketColorClass}">

            </div>

            <div class="ticket-id">
                1234
            </div>

            <div class="ticket-task">
                ${ticketTask}
            </div>

            <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i>    
            </div>`;

            mainCont.appendChild(ticketCont);
            modalCont.style.display = "none";

            handleLock(ticketCont);   //lock
            handleRemoval(ticketCont);   //ticket removal
}

// handling Lock
function handleLock(ticket) {
    let ticketLockElem = ticket.querySelector(".ticket-lock");
    let ticketTaskArea = document.querySelector(".ticket-task");

    let ticketLockIcon = ticketLockElem.children[0];
    ticketLockIcon.addEventListener("click" , function() {
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