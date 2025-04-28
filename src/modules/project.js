import { reload } from "./renderDOM";

export default class Project {

    // Project Name

    // Tasks Array
    // Not every project will have tasks


    constructor (name, description){
        this.tasks = []
        this.name = name;
        if(description){
            this.description = description;
        } else {
            this.description = "";
        }
    }

    //Get name
    getName = function(){
        return this.name;
    }

    //Set name
    setName = function(newName){
        this.name = newName;
    }

    //Get description
    getDescription = function(){
        return this.description;
    }

    //Set description
    setDescription = function(newDescription){
        this.description = newDescription;
    }


    // Add task to project
    addTask = function(newTask){
        this.tasks.push(newTask);
    }

    // Remove task from project
    removeTask = function(task){
        // find task in array
        // remove task

        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
        reload();
    }


}