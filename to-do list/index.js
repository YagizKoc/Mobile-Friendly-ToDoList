const INPUTBOX = document.getElementById("input-box");
const LISTCONTAINER = document.getElementById("list-container");
const TASKS = document.getElementById("tasks")


function addTask(){
    if(INPUTBOX.value === ""){
        alert("You need to insert a task")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = INPUTBOX.value;
        LISTCONTAINER.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
        var input = document.getElementById("input-box");
        
    }
    INPUTBOX.value = ""
    saveData();
}

INPUTBOX.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

LISTCONTAINER.addEventListener("click", function(e){
   if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
});

function saveData(){
    localStorage.setItem("data", LISTCONTAINER.innerHTML );
}

function showTask(){
    LISTCONTAINER.innerHTML = localStorage.getItem("data");
}
showTask();





  
