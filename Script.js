//initial references
const newTaskInput=document.queryselector(#new-task input");
const tasksdiv=document.queryselector("#tasks");
let delete tasks,edit,tasks;
let updatenote="";
//function on window load
window.onload=0=>{
updatenote="";
count=Object.keys(local storage).length;
displayTasks();
}
//function to display the tasks
count displayTasks=0=>{
  if (object.keys(localstorage).length>0){
    tasksDiv.style.display="inline.block";
  }else{
    tasksDiv.style.display="none";
  }
};
// Clear all tasks
function clearAllTasks() {
  if (confirm("Are you sure you want to delete all tasks?")) {
    localStorage.clear();
    tasksDiv.innerHTML = "";
    tasksDiv.style.display = "none";
    count = 0;
  }
}
