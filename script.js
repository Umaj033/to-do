function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var listItem = document.createElement("li");
        
        listItem.innerHTML = '<input type="checkbox" onclick="toggleTask(this)"> ' + taskText;
        taskList.appendChild(listItem);
        
        taskInput.value = "";
    }
}

function toggleTask(checkbox) {
    var listItem = checkbox.parentElement;
    
    if (checkbox.checked) {
        listItem.classList.add("completed");
    } else {
        listItem.classList.remove("completed");
    }
}