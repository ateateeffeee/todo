//Loads dom module
const dom = require('./dom.js');
//Executes dom module
dom.init();

//Factory function to create To-do items
function todoItem(title, description, dueDate, priority, projectName) {
    const todoItem = {};

    todoItem.title = title;
    todoItem.description = description;
    todoItem.dueDate = dueDate;
    todoItem.priority = priority;
    todoItem.projectName = projectName;

    return todoItem;
}

//test item
const testItem = new todoItem('Samurai Black', 'Become black',
 'tomorrow', 'very important', 'Cool Things');
//console.log(testItem.dueDate);

//Global project array. (This holds all projects)
const projectArray = [];

//Main To-do list module
const todoList = (() => {
    const init = function() {
        //this.test();
        this.createDefaultProject();
        this.getUserInput();
    }

    const test = function() {
        console.log("this is the test function");
    }

    const createNewItem = function(title, description, dueDate,
        priority, projectName) {
        let newItem = new todoItem(title, description, dueDate, priority,
            projectName);

        console.log(newItem);

        //TEST PUSH TO PROJECT ARRAY
        //projectArray[0][0].push(newItem);
        
    }

    const getUserInput = function() {
        //make these equal a text box when dom is set up
        let title = "Get a gf";
        let description = "Talk to a girl";
        let dueDate = "Tomorrow";
        let priority = "Urgent";
        let projectName = "MINDSET";

        //Insert if statement that says: "If project name
            // does not exist, createNewProject();"
            //If name  == "default" or it's blank, put in
            //default

        //This creates a new todo item
        todoList.createNewItem(title, description, dueDate, 
            priority, projectName);
    }

    const createDefaultProject = function() {
        let defaultProject = [];
        projectArray.push(defaultProject);
    }

    return {
        init,
        test,
        createNewItem,
        getUserInput,
        createDefaultProject,
        // createNewProject,
        // start here tomorrow
            //make each project an array to store to-do's in?

    }
})();

todoList.init();

//IDEAS: Have one array that holds all to-do items.
    //Loop through array to find only items that have same
    //project name.

    //How to handle the default page?
    //Have a global array that stores project arrays. Push
    //to-do's to project array. NOPE. Just default that property
    //to "default" and don't show it in to-do list. This solves
    //default page but how do you make new projects w/o making
    //new to-do items? Can't see it being anything other than an array.
    //store project names in array? Get property names from that?
        //In whatever funciton that deletes proj name, delete items
        //with that name also. THIS IS THE ANSWER