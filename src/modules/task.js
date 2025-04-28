export default class Task{

    //Title, Description, DueDate, Priority, Notes, and Checklist
    // Not all tasks will have a due date
    constructor(title, priority, dueDate, description, notes){
        this.title = title;
        this.priority = priority;

        if(description){
            this.description = description;
        } else {
            this.description = "";
        }
        if(dueDate){
            this.dueDate = dueDate;
        } else {
            this.dueDate = "";
        }
        if(notes){
            this.notes = notes;
        } else {
            this.notes = "";
        }
    }


    //Get name
    getName = function(){
        return this.title;
    }

    //Set name
    setName = function(newName){
        this.title = newName;
    }

    //Get description
    getDescription = function(){
        return this.description;
    }

    //Set description
    setDescription = function(newDescription){
        this.description = newDescription;
    }


    //Due Date
    getDate = function(){
        return this.dueDate;
    }

    setDate = function(newDate){
        this.dueDate = newDate; 
    }


    //Priority
    getPriority = function(){
        return this.priority;
    }

    setPriority = function(newPriority){
        this.priority = newPriority;
    }

    //Notes
    getNotes = function(){
        return this.notes;

    }

    setNotes = function(newNotes){
        this.notes = newNotes;
    }
}

