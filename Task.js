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
    SavedTask.removeChild(taskList)
 })
     
 editButton.addEventListener("click", function () {

        if (editButton.textContent === "Edit") {

            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = textHolder.textContent;

            taskList.replaceChild(editInput, textHolder);
            editButton.textContent = "Save";

        } else {

            const editInput = taskList.querySelector("input");
            textHolder.textContent = editInput.value;

            taskList.replaceChild(textHolder, editInput);
            editButton.textContent = "Edit";
        }
    });
});

editButton.addEventListener("click", function () {

    if (editButton.textContent === "Edit") {
        // Create input field
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = textHolder.textContent;

        // Replace <p> with input
        taskList.replaceChild(editInput, textHolder);

        editButton.textContent = "Save";

    } else {
        // Get updated value
        const editInput = taskList.querySelector("input");
        textHolder.textContent = editInput.value;

        // Replace input back with <p>
        taskList.replaceChild(textHolder, editInput);

        editButton.textContent = "Edit";
    }
});






