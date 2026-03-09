let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(){
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{
        const li = document.createElement("li");

        if(task.completed){
            li.classList.add("completed");
        }

        li.innerHTML = `<span>${task.text}</span>
        <button class="complete-btn" onclick="toggleTask(${index})">✓</button>`;

        taskList.appendChild(li);
    });

    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function addTask(){
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if(text==="") return;

    tasks.push({
        text:text,
        completed:false
    });

    input.value="";
    renderTasks();
}

function toggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index){
    tasks.splice(index,1);
    renderTasks();
}

renderTasks();