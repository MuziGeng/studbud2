// make the "add" button click to open the input list

document.getElementById("myBtn").addEventListener("click", function(){
    document.getElementById("cent").classList.toggle("addBtn");
  });
  // make the "done" button click to done the input list
  document.getElementById("submitBtn").addEventListener("click", function(){
    document.getElementById("cent").classList.toggle("addBtn");
  });
  
  const form = document.getElementById("taskform");
  const button = document.querySelector("#taskform > button");
  var taskInput = document.getElementById("taskInput");
  var dueDateInput = document.getElementById("dueDateInput");
  var weightInput = document.getElementById("weightInput");
  var completionTimeInput = document.getElementById("completionTime");
  var taskList = document.getElementById("taskList");
  
  button.addEventListener("click", function(event){
    event.preventDefault();
    let task = taskInput.value;
    let dueDate = dueDateInput.value;
    let weight = weightInput.value;
    let completionTime = completionTimeInput.value;
    addTask(task, dueDate, weight, completionTime, false);
    console.log(taskList);
  })
  
  var taskListArray = [];
  
  function addTask(taskDescription, dueDate, weight, completionTime ){
    let d = new Date();
    let dateCreated = d.getFullYear();
    let task = {
      taskDescription,
      dueDate,
      dateCreated,
      weight,
      completionTime
    };
    taskListArray.push(task);
    renderTask(task);
  }
  function renderTask(task){
    let item = document.createElement("li");
    item.innerHTML = "<taskName>" + task.taskDescription + "</taskName>" + "<taskDueDate>" +"Due:"+ task.dueDate + "</taskDueDate>"+"<taskWeight>" +"Weight:"+ task.weight + "</taskWeight>"+"<taskTime>" +"Time:"+ task.completionTime + "</taskTime>";
  
    taskList.appendChild(item);
    
    let delButton = document.createElement("delBtn");
    let delButtonText = document.createTextNode("DONE");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);
  
    delButton.addEventListener("click", function(event){
      event.preventDefault();
      item.remove();
    
    })
  form.reset();
  }

  