const submitButton = document.getElementById("btnSubmit");
const clearButton = document.getElementById("btnClear");
const tasks = document.getElementById("tasks");
const messageElement = document.getElementById("message");

submitButton.addEventListener("click", addTask);
clearButton.addEventListener("click", clearList);
tasks.addEventListener("click", handleTaskClick);

displayMessage("Good, you have no tasks today!");

function clearList() {
    const taskList = tasks.getElementsByClassName("list-group-item");
    while (taskList.length > 0) {
        taskList[0].parentNode.removeChild(taskList[0]);
    }
    displayMessage("Good, you have no tasks today!");
}

function handleTaskClick(event) {
    const style = event.target.style;
    if (!style.textDecoration) {
        style.textDecoration = "line-through";
    } else {
        style.textDecoration = "";
    }
}

function addTask() {
    const newTask = document.getElementById("newTask");
    if(inputIsValid(newTask.value)){
        tasks.innerHTML += `<li class="list-group-item">${newTask.value}</li>`;
        messageElement.style.visibility = "hidden";        
        newTask.value = "";
    }else{
        displayMessage("Please provide non empty input!");
    }  
}

function displayMessage(message) {
    messageElement.style.visibility = "visible";
    messageElement.innerText = message;
}

function inputIsValid(input){
    if(input){
        return true;
    }
    return false;
}
