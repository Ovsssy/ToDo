//Добавление и удаление задачи

const inputBox = document.getElementById('input-box');
const taskList = document.getElementById('task-list');

function addTask(){
    if(inputBox.value === ''){
        alert("Напишите задачу!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.classList.add("task-block__item");
        li.classList.add("task-block__item--active");
        taskList.appendChild(li);
        let buttonRemove = document.createElement("button");
        buttonRemove.innerHTML;
        buttonRemove.classList.add("task-block__delete");
        li.appendChild(buttonRemove);
    }
    inputBox.value = "";
    location.reload();
    saveData();
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("task-block__item--checked");
        e.target.classList.toggle("task-block__item--active");
        saveData();
    }
    if (e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}

showTask();


// Фильтрация

const filterBox = document.querySelectorAll('.task-block__item');

document.querySelector('.navigation').addEventListener('click', event =>{
    if (event.target.tagName !== "LI") return false;
    let filterClass = event.target.dataset['f'];
    console.log(filterClass);
    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if(elem.classList.contains(filterClass)){
            elem.classList.add('hide');
        }
    });
});
