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
  //named the var 
  var taskInput = document.getElementById("taskInput");
  var dueDateInput = document.getElementById("dueDateInput");
  var weightInput = document.getElementById("weightInput");
  var daysRemaining = document.getElementById("daysRemaining");
  var completionTimeInput = document.getElementById("completionTime");
  var taskList = document.getElementById("taskList");
  
  button.addEventListener("click", function(event){
    event.preventDefault();
    let task = taskInput.value;
    let dueDate = dueDateInput.value;
    let weight = weightInput.value;
    let completionTime = completionTimeInput.value;
    let days = daysRemaining.value;
    addTask(task, dueDate, weight, days,completionTime, false);
    console.log(taskList);
  })
  // add a array
  var taskListArray = [];
  
  function addTask(taskDescription, dueDate, weight,days, completionTime ){
    let d = new Date();
    let dateCreated = d.getFullYear();
    let task = {
      taskDescription,
      dueDate,
      dateCreated,
      weight,
      days,
      completionTime
    };
    taskListArray.push(task);
    renderTask(task);
  }
  function renderTask(task){
   
    let item = document.createElement("li");
    item.innerHTML = "<taskName>" + task.taskDescription + "</taskName>" + "<taskDueDate>" +"Due:"+ task.dueDate + "</taskDueDate>"+"<taskWeight>" +"Weight:"+ task.weight + "</taskWeight>"+"<taskDays>" +"Days Remaining:"+ task.days + "</taskDays>"+"<taskTime>" +"Time:"+ task.completionTime + "</taskTime>";
    // set the color 
    if (task.weight > 25 && task.days < 15){
     // important and urgent is red;
      item.style.backgroundColor = '#FF2323 ';
    }else if (task.weight > 25 && task.days > 15){
      //important NOT urgent is yellow
      item.style.backgroundColor = '#FFF623 ';
    }
    else if (task.weight < 25 && task.days > 15){
      //not important not urgent is green
      item.style.backgroundColor = '#69FF23';
    }else{
      //not important and urgent is blue
      item.style.backgroundColor = '#23BDFF';
    }
    taskList.appendChild(item);
    // delet the button
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

// add link
  function linkA(){
    var  linkInput=document.getElementById("linkInput");
    document.getElementById("linkList").innerHTML=linkInput.value;
}