import { currProject, projects } from "../..";
import Render, { reload } from "../renderDOM";
import Task from "../task";

export default function content(){
    const main = document.querySelector("main");


    const container = document.createElement("div");
    container.classList.add("container");

    const content = document.createElement("div");
    content.classList.add("content");

    const projectdesc = document.createElement("h1");
    projectdesc.textContent = projects[currProject].getDescription();


    // Add a new task
    const addTask = document.createElement("button");
    addTask.classList.add("card");
    
    const h1 = document.createElement("h1");
    h1.textContent = "+ New Task";
    addTask.append(h1);
    content.append(addTask);

    addTask.addEventListener("click", () => newTask())


    for(let i = 0; i < projects[currProject].tasks.length; i++){
        const card = document.createElement("button");
        card.setAttribute("data-id", i);
        card.classList.add("card");

        const task = projects[currProject].tasks[i];

        if(task.getPriority() == 1){
            card.classList.add("lowpriority");
        } else if(task.getPriority() == 2){
            card.classList.add("mediumpriority");
        } else {
            card.classList.add("highpriority");
        }


        const h1 = document.createElement("h1");
        h1.textContent = task.getName();

        const h2 = document.createElement("p");
        h2.textContent = task.getDate();

        card.append(h1);
        card.append(h2);
        content.append(card);

        card.addEventListener("click", () => cardInfo(i));

    }
    container.append(projectdesc);
    container.append(content);
    main.append(container);
}

const cardInfo = function(i){
    //Return if theres already a button form
    const test = document.querySelector(".buttonform");
    if(test) {
        return;
    } 
    
    const task = projects[currProject].tasks[i];



    const content = document.querySelector(".content");

    //Create a task form
    const form = document.createElement("form");
    form.classList.add("buttonform");


    //Title
    const title = document.createElement("input")
    title.placeholder="title";
    title.name = "title";
    title.value = task.getName();
    title.required = true;


    //Priority
    const prioritySet = document.createElement("fieldset");

    const p = document.createElement("p")
    p.textContent = "Priority"


    const prioritylow = document.createElement("input");
    prioritylow.classList.add("lowpriority");
    prioritylow.setAttribute("id", "lowpriority");
    prioritylow.setAttribute("name", "priority");
    prioritylow.setAttribute("type", "radio");

    const prioritymedium = document.createElement("input");
    prioritymedium.classList.add("mediumpriority");
    prioritymedium.setAttribute("id", "mediumpriority");
    prioritymedium.setAttribute("name", "priority");
    prioritymedium.setAttribute("type", "radio");

    const priorityhigh = document.createElement("input");
    priorityhigh.classList.add("highpriority");
    priorityhigh.setAttribute("id", "highpriority");
    priorityhigh.setAttribute("name", "priority");
    priorityhigh.setAttribute("type", "radio");

    if(task.getPriority() == 1){
        prioritylow.checked = true;
    } else if(task.getPriority() == 2){
        prioritymedium.checked = true;
    } else {
        priorityhigh.checked = true;
    }

    prioritySet.append(p);
    prioritySet.append(prioritylow);
    prioritySet.append(prioritymedium);
    prioritySet.append(priorityhigh);

    //Due Date
    const dueDate = document.createElement("input")
    dueDate.setAttribute("type", "date");
    dueDate.placeholder="dueDate";
    dueDate.name = "date";
    dueDate.value = task.getDate();

    
    //Description
    const description = document.createElement("textarea")
    description.placeholder="description";
    description.name = "description";
    description.value = task.getDescription();



    //Extra Notes
    const notes = document.createElement("textarea")
    notes.placeholder="notes";
    notes.name = "notes";
    notes.value = task.getNotes();



    //Submit
    const submit = document.createElement("button");
    submit.innerText="Close";
    submit.addEventListener("click", (e) => {

        if (!form.checkValidity()) {
            form.reportValidity(); // this will show the browser's error popup
            return; // stop doing anything else
        }

        e.preventDefault();


        const data = new FormData(document.querySelector(".buttonform"));

        const title = data.get("title");
        const dueDate = data.get("date");
        const description = data.get("description");
        const notes = data.get("notes");
        var priority = -1;

        var radios = document.getElementsByName("priority");
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                priority = i+1;
                break;
            }
        }



        task.setName(title);
        task.setDate(dueDate);
        task.setDescription(description);
        task.setNotes(notes);
        task.setPriority(priority);

        reload();
        form.remove();
    })

    // Delete
    const remove = document.createElement("button");
    remove.type = "button";
    remove.innerText="Delete";
    remove.addEventListener("click", () => {

        projects[currProject].removeTask(task);
        form.remove();
    })
    

    form.append(title);
    form.append(prioritySet);
    form.append(dueDate);
    form.append(description);
    form.append(notes);
    form.append(submit);
    form.append(remove);
    content.append(form);
}

const newTask = function(){
    const content = document.querySelector(".content");

    //Create a task form
    const form = document.createElement("form");
    form.classList.add("buttonform");


    //Title
    const title = document.createElement("input")
    title.placeholder="title";
    title.name = "title";
    title.required = true;


    //Priority
    const prioritySet = document.createElement("fieldset");

    const p = document.createElement("p")
    p.textContent = "Priority"


    const prioritylow = document.createElement("input");
    prioritylow.classList.add("lowpriority");
    prioritylow.setAttribute("id", "lowpriority");
    prioritylow.setAttribute("name", "priority");
    prioritylow.setAttribute("type", "radio");
    prioritylow.checked = true;

    const prioritymedium = document.createElement("input");
    prioritymedium.classList.add("mediumpriority");
    prioritymedium.setAttribute("id", "mediumpriority");
    prioritymedium.setAttribute("name", "priority");
    prioritymedium.setAttribute("type", "radio");

    const priorityhigh = document.createElement("input");
    priorityhigh.classList.add("highpriority");
    priorityhigh.setAttribute("id", "highpriority");
    priorityhigh.setAttribute("name", "priority");
    priorityhigh.setAttribute("type", "radio");

    prioritySet.append(p);
    prioritySet.append(prioritylow);
    prioritySet.append(prioritymedium);
    prioritySet.append(priorityhigh);

    //Due Date
    const dueDate = document.createElement("input")
    dueDate.setAttribute("type", "date");
    dueDate.placeholder="dueDate";
    dueDate.name = "date";
    
    //Description
    const description = document.createElement("textarea")
    description.placeholder="description";
    description.name = "description";


    //Extra Notes
    const notes = document.createElement("textarea")
    notes.placeholder="notes";
    notes.name = "notes";


    //Submit
    const submit = document.createElement("button");
    submit.innerText="Submit";
    submit.addEventListener("click", (e) => {

        if (!form.checkValidity()) {
            form.reportValidity(); // this will show the browser's error popup
            return; // stop doing anything else
        }

        e.preventDefault();

        const data = new FormData(document.querySelector(".buttonform"));

        const title = data.get("title");
        const dueDate = data.get("date");
        const description = data.get("description");
        const notes = data.get("notes");
        var priority = 1;

        var radios = document.getElementsByName("priority");
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                priority = i+1;
                break;
            }
        }


        projects[currProject].addTask(new Task(title, priority, dueDate, description, notes));
        reload();
        form.remove();
    })

    // Close
    const close = document.createElement("button");
    close.type = "button";
    close.innerText="Close";
    close.addEventListener("click", () => {
        form.remove();
    })
    

    form.append(title);
    form.append(prioritySet);
    form.append(dueDate);
    form.append(description);
    form.append(notes);
    form.append(close);
    form.append(submit);
    content.append(form);
}