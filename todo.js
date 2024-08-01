document.querySelector('.add').addEventListener('click', function(event) {
    event.preventDefault();
    
    const taskInput = document.getElementById('text');
    const datetimeInput = document.getElementById('datetime');
    const errorMessage = document.getElementById('error-message');
    const taskText = taskInput.value.trim();
    const datetimeValue = datetimeInput.value.trim();

    taskInput.classList.remove('error');
    datetimeInput.classList.remove('error');
    errorMessage.classList.add('hide');

    if (taskText === "" || datetimeValue === "") {
        // Show error message and highlight empty fields
        errorMessage.classList.remove('hide');
        
        if (taskText === "") {
            taskInput.classList.add('error');
        }
        
        if (datetimeValue === "") {
            datetimeInput.classList.add('error');
        }
    } else {
        // Proceed with adding the task
        addTask(taskText, datetimeValue);
        
        // Clear input fields
        taskInput.value = "";
        datetimeInput.value = "";
    }
});

function addTask(task, datetime) {
    const todoList = document.getElementById('tasklist');

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${task}</span>
        <span class="datetime">${datetime}</span>
        <div class="actions">
            <button class="check-button">✔</button>
            <button class="edit-button">✎</button>
            <button class="delete-button">✖</button>
        </div>
    `;

    li.querySelector('.check-button').addEventListener('click', function() {
        li.classList.toggle('completed');
        li.querySelector('.edit-button').style.display = li.classList.contains('completed') ? 'none' : 'inline-block';
    });

    li.querySelector('.edit-button').addEventListener('click', function() {
        editTask(li);
    });

    li.querySelector('.delete-button').addEventListener('click', function() {
        li.remove();
    });

    todoList.appendChild(li);
}

function editTask(taskElement) {
    const taskText = taskElement.querySelector('span').textContent;
    const datetimeValue = taskElement.querySelector('.datetime').textContent;

    const newTaskText = prompt("Edit your task:", taskText);
    const newDatetimeValue = prompt("Edit date/time:", datetimeValue);

    if (newTaskText !== null && newDatetimeValue !== null) {
        taskElement.querySelector('span').textContent = newTaskText;
        taskElement.querySelector('.datetime').textContent = newDatetimeValue;
    }
}

let head=document.getElementsByClassName('header')[0];
let start=document.getElementsByClassName('start')[0];
let container=document.getElementsByClassName('container')[0];

start.classList.remove("hidden")
head.classList.remove('hidden')
start.addEventListener('click',()=>{
    container.classList.remove('visible')
    start.classList.add("hidden")
head.classList.add('hidden')


start.style.opacity = '0';
    start.style.transform = 'translateY(-50px)';
})

