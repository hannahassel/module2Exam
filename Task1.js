// The comments are commented above what they are explaining
//ideas for improvements are also commented directly in the code  

// this let declares a variable tasks that we can use again later it also gives us an empty array 
//so it starts with no value and it will be filled later during by the user, we do not want to start with any items in the list
let tasks = [];
//here we add an function to the add button (that we see in our html file) so that when this button is clicked the function add task will run
document.getElementById("addBtn").addEventListener("click", addTask);
//here we also add an function to the filter button (that we have in our html file) so that when it is clicked the function filtertasks will run 
document.getElementById("filterBtn").addEventListener("click", filterTasks);
//here we also add an function to the clearfilterbutton (that we also have in our html file) so that when it is clicked the function resetfilter will run 
document.getElementById("clearFilterBtn").addEventListener("click", resetFilter);

//here is a function getinputvalue that we will use later in the code 
//we want to get a value from html by its id and returns the value of the selected element 
// the trim removes unwanted things from the value 
function getInputValue(id) {
  return document.getElementById(id).value.trim();
}
//this is a function that creates a task object with two properties and then returns the object
//an idea for improvement is removing the taskObj and just returning the properties like this: return { description, category };
//because it is just unnessecary lines
function createTask(description, category) {
  taskObj = {description, category};
  return taskObj;
}

//this is a function add task here we are using the addtask function that we made earlier and the getinputvalue function
//so when the addbutton is clicked this function will run 
//it get the input value from the task input in our html file where the user writes their task 
//and they also get the input from the dropdown menu in the html file and set both of the values as description and categories using the const category/ const description as local variables 
function addTask() {
  const description = getInputValue("taskInput");
  const category = getInputValue("categorySelect");

//here we have also added an if statements that states that if the description is shorter than two characters the user will get an alert saying that it is too short 
  if (description.length < 2) return alert("Task too short");

 //then later here we have a another const new task object it uses the function create task that we used earlier 
 // it then pushes the new task into an array and this holds all the task and then it renders the tasks to dispaly the list of the task with a function that we see under this 
 // and then it clears the input field 
  const newTask = createTask(description, category);
  tasks.push(newTask);
  renderTasks(tasks);
  clearInputs();
}

//here we have a function called rendertask that takes gives us a list of the tasks and that we can use in the html file 
//first it seaches for the element tasklist and makes a constant variable ul 
// the ul.innerHTML = "" does so that it is cleared before rendering the updated tasks 
// it then loops over each task in the list and then it makes a new li element for each task and adds the li elements to the ul element and adds the task to the showed list 
// it also displays the category and description in a specific format that you see with the [] and the + and for each new task it creates a new list item 
function renderTasks(list) {
  const ul = document.getElementById("taskList");
  ul.innerHTML = "";
  list.forEach(task => {
    const li = document.createElement("li");
    li.textContent = '[' + task.category + '] ' + task.description;
    ul.appendChild(li);
  });
}

//this function clearinputs goes to the taskinput in the html file which is where the user writes their task and clears it 
//the function is also used in this js file 
// it selects the html element with the taskinput id which is the text input box and then sets the value to "" an empty string and this clears any text the user has entered
// and this is then used at the buttom of for example the add task function because when everything in the function is done the user has entered a description and a category 
//and it is pushed to the list after the button is pressed this function then clears the inputfield so it is ready for another task and the user does not have to manually remove the text 
function clearInputs() {
  document.getElementById("taskInput").value = "";
}

//this function is for the filtering of the tasks in the html 

//an idea for an improvement here is usin const instead of let because const is more used on things that is not to be changed so that it can prevent accidental changes 
function filterTasks() {
  const cat = getInputValue("categorySelect");
  let results = [];

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].category === cat) {
      results.push(tasks[i]);
    }
  }

  console.log("Filtering tasks for category:", cat);
  console.log("Found:", results.length);

  const ul = document.getElementById("taskList");
  ul.innerHTML = "";

  for (let i = 0; i < results.length; i++) {
    const li = document.createElement("li");
    li.textContent = '[' +results[i].category + '] ' + results[i].description;
    ul.appendChild(li);
  }

  for (let i = 0; i < results.length; i++) {
    if (results[i].description.includes("test")) {
      console.log("Task contains 'test':", results[i].description);
    }
  }

  const countInfo = document.createElement("li");
  countInfo.textContent = 'Total in ' + cat + ': ' + results.length;
  countInfo.style.fontWeight = "bold";
  ul.appendChild(countInfo);
}

//this function uses the rendertask function and the resetfilter function so that when the resetfilter button is pushed it will run the rendertask function and just give us the original list without filtering 
function resetFilter(){
    renderTasks(tasks);
}