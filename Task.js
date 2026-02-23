const Task = document.getElementById("task");
const AddTaskButton = document.getElementById("addTask_button");
const SavedTask = document.getElementById("savedTask");

AddTaskButton.addEventListener("click", function(){
    const captureInput = Task.value

    const taskList = document.createElement("li");

    const textHolder = document.createElement("p");
    textHolder.textContent = captureInput;

    const editButton = document.createElement("button")
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"

    taskList.appendChild(textHolder)
    taskList.appendChild(editButton)
    taskList.appendChild(deleteButton)
    SavedTask.appendChild(taskList)

    Task.value = "";

    deleteButton.addEventListener("click", function(){
    savedTask.removeChild(taskList)
 })
     
 editButton.addEventListener("click", function () {

        if (editButton.textContent === "Edit") {
            // Change span to input
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = taskText.textContent;

            newTask.replaceChild(editInput, taskText);
            editButton.textContent = "Save";

        } else {
            // Save changes
            const updatedText = newTask.querySelector("input").value;

            taskText.textContent = updatedText;
            newTask.replaceChild(taskText, newTask.querySelector("input"));
            editButton.textContent = "Edit";
        }
    });
})





