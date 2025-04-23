export default class Project {

    // Project Name

    // Tasks Array
    // Not every project will have tasks


    constructor (name){
        this.projects = []
        this.name = name;
    }

    //Get name
    getName = function(){
        return this.name;
    }

    //Set name
    setName = function(newName){
        this.name = newName;
    }


    // Add task to project
    addTask = function(task){
        this.projects.push(task);
    }

    // Remove task from project
    removeTask = function(task){
        // find task in array
        // remove task
    }

    
}