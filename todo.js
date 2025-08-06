
     let todoList = [];
     let btn = document.querySelector("#addTodoButton"); 
     btn.addEventListener('click', function() {
         let todoInput = document.querySelector("#todoInput");
         let todoText = todoInput.value.trim();
         if (todoText) {
             todoList.push(todoText);
             todoInput.value = '';
             renderTodoList();
         }
     }); 
     function renderTodoList() {
         let todoListElement = document.querySelector("#todoList");
         todoListElement.innerHTML = '';
         todoList.forEach(function(todo, index) {
             let li = document.createElement('li');
             li.textContent = todo; 
             let deleteButton = document.createElement('button');
             deleteButton.textContent = 'Delete';
       deleteButton.addEventListener('click', function() {
            todoList.splice(index, 1);  // Remove the item from array
            renderTodoList();          // Refresh list
        });

        li.appendChild(deleteButton);  // Add delete button to li
        todoListElement.appendChild(li);

                
         });
     }
           
             
  