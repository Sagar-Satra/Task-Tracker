// using DOMContentLoaded for proper loading of HTML and script
document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.querySelector('.create-task-details');
    const taskForm = document.getElementById('task-fields');
    const taskTitle = document.getElementById('task-title');
    const taskDescription = document.getElementById('task-Description');
    const saveTaskButton = document.querySelector('.save-Task-Button');
    const taskList = document.querySelector('.task-list-container');
    

    // Fetch tasks from JSON file USING XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data/tasks.json');
    xhr.addEventListener('load', function() {
        if (this.status === 200) {
            const tasks = JSON.parse(this.responseText);
            tasks.forEach(addTask);
        }
    });
    xhr.send();

    // Create task button to input task details
    addTaskButton.addEventListener('click', () => {
        taskForm.classList.toggle('hidden');
    });

    // Main function to display the json data by creating HTML elements and adding additional tasks
    function addTask(task,index) {
        const taskElement = document.createElement('article');
        taskElement.classList.add('task-details');
        taskElement.setAttribute("id", "article-"+(index+1));

        // Created input element for editing title
        const taskTitleInput= document.createElement('input');
        taskTitleInput.setAttribute("id","text-"+(index+1));
        taskTitleInput.value=task.title;
        taskTitleInput.classList.add('hidden');

         // Created input element for editing description
        const taskDescInput= document.createElement('textarea');
        taskDescInput.setAttribute("id","textarea-"+(index+1));
        taskDescInput.classList.add('hidden');
        taskDescInput.classList.add('extra-height');
        taskDescInput.textContent = task.description;
        
         // Created HTML element for displaying title
        const tasktitle = document.createElement('h3');
        tasktitle.classList.add('t-title');
        tasktitle.textContent = task.title;

        // Created HTML element for displaying desciption
        const taskDescription = document.createElement('p');
        taskDescription.classList.add('t-description');
        taskDescription.textContent = task.description;

        // Created HTML element for displaying date of creation of task
        const detailsElement = document.createElement('p');
        detailsElement.classList.add('t-date');
        // detailsElement.textContent = `${task.description} - Created on: ${task.creationDate}`;
        detailsElement.textContent = `Created on: ${task.creationDate}`;

        // Created HTML element button for deleting task
        const deleteTasks = document.createElement('button');
        deleteTasks.innerHTML = 'X';
        deleteTasks.classList.add('toggle-delete-btn');
        deleteTasks.addEventListener('click',()=>{
            document.getElementById("article-"+(index+1)).remove();
        });

        // Created HTML element button for saving edit details
        const editTask = document.createElement('button');
        editTask.classList.add("hidden");
        editTask.classList.add("edit-Task-Button");
        editTask.innerHTML = 'Save Task';
        editTask.addEventListener('click',()=>{
            tasktitle.innerHTML=taskTitleInput.value;
            taskDescription.innerHTML=taskDescInput.value;
            tasktitle.classList.remove('hidden');
            taskDescription.classList.remove('hidden');
            taskTitleInput.classList.add('hidden');
            taskDescInput.classList.add('hidden');
            editTask.classList.add('hidden');
            taskTitleInput.classList.remove('display-as-block');
            taskDescInput.classList.remove('display-as-block');
            detailsElement.classList.remove('expanded');
            taskDescription.classList.add('t-description');

        });

        // if json data has any tasks as completed, it will strike out the task as completed
        if (task.completed){
            tasktitle.classList.add('completed');
            taskDescription.classList.add('completed');
            detailsElement.classList.add('completed');
        } 

        // Created HTML element button for togging the task as complete and incomplete
        const toggleElement = document.createElement('input');
        toggleElement.type = 'checkbox';
        toggleElement.classList.add('toggle-checkbox');
        toggleElement.checked = task.completed;
        toggleElement.addEventListener('change', () => {
            tasktitle.classList.toggle('completed');
            taskDescription.classList.toggle('completed');
            detailsElement.classList.toggle('completed');
        });
  
        // for viewing the full description and creation date of the task
        tasktitle.addEventListener('click', (e) => {
            
                tasktitle.classList.add('hidden');
                taskDescription.classList.add('hidden');
                taskTitleInput.classList.remove('hidden');
                taskTitleInput.classList.add('display-as-block');
                taskDescInput.classList.remove('hidden');
                taskDescInput.classList.add('display-as-block');
                editTask.classList.remove("hidden");
                detailsElement.classList.add('expanded');
                taskDescription.classList.remove('t-description');

        });

        // added all the created elements to the parent container for displaying of JSON data
        taskElement.appendChild(tasktitle);
        taskElement.appendChild(taskTitleInput);
        taskElement.appendChild(taskDescription);
        taskElement.appendChild(taskDescInput);
        taskElement.appendChild(detailsElement);
        taskElement.appendChild(toggleElement);
        taskElement.appendChild(deleteTasks);
        taskElement.appendChild(editTask);

        taskList.appendChild(taskElement);
    }

    // validations for the input fields, while creating and saving a task 
    saveTaskButton.addEventListener('click', () => {
        if (taskTitle.value === '' || taskDescription.value === ""){
            alert("Please enter text in all fields.")
        }else{
            const newTask = {
                title: taskTitle.value,
                description: taskDescription.value,
                creationDate: new Date().toLocaleString(),
                completed: false
            };
            var numItems = document.querySelectorAll('.task-details').length;
            addTask(newTask,numItems);
            taskTitle.value = '';
            taskDescription.value = '';
            taskForm.classList.add('hidden');
            console.log()
        }  
    });

});

function deleteArticle(id){
    console.log(id)
    document.getElementById(id).remove();

}

