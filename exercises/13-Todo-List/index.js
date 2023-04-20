// Your code here
let deleteTasks = document.querySelectorAll(".delete-task");
      deleteTasks.forEach(function (deleteTask) {
        // Agrega el evento de clic a cada elemento de lista
        deleteTask.addEventListener("click", function () {
          deleteTask.remove();
        });
      });
      let todo = document.querySelector("#addToDo");
      todo.addEventListener("change", function () {
        let newList = document.createElement("li");
        let parentList = document.querySelector("#parentList");
        newList.innerHTML = todo.value;
        parentList.appendChild(newList);

        // añadir un listener a newList para que al hacer click haga el deleteTask.remove()
        newList.addEventListener("click", function () {
          newList.remove();
        });

        newList.classList.add("delete-task");
        parentList.appendChild(newList);
        todo.value = "";
        todo.Placeholder = "";
      });