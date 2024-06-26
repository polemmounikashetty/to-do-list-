const taskinput=document.getElementById("taskinput");
const tasklist=document.getElementById("tasklist");


//function to add the task
function addTask(){
    const tasktext=taskinput.value.trim();
    console.log(tasktext);
    if (tasktext=="")return ;
    console.log(tasktext);
    const li=document.createElement("li");
    console.log(li);
    li.innerHTML=` <span>${tasktext}</span>
    <button onclick="markTaskAsDone(this)">Done</button>
     <button onclick="editTask(this)">Edit</button>
      <button onclick="deleteTask(this)">Delete</button>`;

      tasklist.appendChild(li);
      taskinput.value="";
}
// function markTaskAsDone(event) {
//     const li = event.target.closest('li');
//     li.classList.add('done');
   
// }

// // Function to edit a task
// function editTask(event) {
//     const li = event.target.closest('li');
//     const span = li.querySelector('span');
//     const newTaskText = prompt('Enter the new task text:', span.textContent.trim());
//     if (newTaskText !== null) {
//         span.textContent = newTaskText;
      
//     }
// }

// // Function to delete a task
// function deleteTask(event) {
//     const li = event.target.closest('li');
//     li.remove();
//     // You can also update your data model or perform other actions here
// }
// function markTaskAsDone(event) {
//     const li = event.target.closest('li');
//     if (li.classList.contains('done')) {
//         li.classList.remove('done'); // Remove the "done" class if it's already done
//     } else {
//         li.classList.add('done'); // Add the "done" class if it's not done
//     }
//     // You can also update your data model or perform other actions here
// }





//.....................2nd way...................................
function  markTaskAsDone(event){
    const task=event.parentElement;
    console.log(task);
    //this keyword always point out the current context.
    task.classList.toggle('completed')
}
function editTask(event){
    const task=event.parentElement;
    const span = task.querySelector('span');
    const newTaskText = prompt('Enter the new task text:', span.textContent.trim());
        if (newTaskText !== null) {
            span.textContent = newTaskText;
          
        }
}
function deleteTask(event) {
    const task=event.parentElement;
    task.remove();
    // You can also update your data model or perform other actions here
     }








