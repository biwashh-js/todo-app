let btn = document.getElementById("btn");
let taskList = document.querySelector(".taskList");
let input = document.getElementById("taskText");

function add() {
    let task = input.value;
    if (task.trim() !== "") {
        let listItem = document.createElement("LI");
        listItem.className = "task-item";
        
        let taskText = document.createElement("span");
        taskText.textContent = task;

        taskText.addEventListener("click", function () {
            if (taskText.style.textDecoration === "line-through") {
                taskText.style.textDecoration = "none";
            } else {
                taskText.style.textDecoration = "line-through";
            }
        });
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        
        deleteBtn.addEventListener("click", function () {
            taskList.removeChild(listItem);
        });

        
        listItem.appendChild(taskText);
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);

        
        input.value = "";
    } else {
        alert("Please input valid text!");
    }
}

btn.addEventListener("click", add);

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        add();
    }
});


