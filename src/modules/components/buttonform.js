import { projects, DOM } from "../..";
import Project from "../project";

function buttonForm(){
    const main = document.querySelector("main")



    const form = document.createElement("form");
    form.setAttribute("id", "buttonform");
    form.classList.add("disabled")

    form.addEventListener("submit", onSubmit);
    //Title
    const title = document.createElement("input");
    title.setAttribute("name", "title")
    title.placeholder = "Title"

    //Due Date
    const dueDate = document.createElement("input");
    dueDate.setAttribute("name", "duedate")
    dueDate.placeholder = "Due Date"

    const priority = document.createElement("div");
    priority.classList.add("priority");

    // Low Priority 
    const lowpriority = document.createElement("input");
    lowpriority.setAttribute("name", "priority")
    lowpriority.setAttribute("id", "low")
    lowpriority.setAttribute("type", "radio")

    const label1 = document.createElement("label")
    label1.setAttribute("for", "low")

    label1.innerText = "Low"



    // Medium Priority 
    const medpriority = document.createElement("input");
    medpriority.setAttribute("name", "priority")
    medpriority.setAttribute("id", "med")
    medpriority.setAttribute("type", "radio")

    const label2 = document.createElement("label")
    label2.setAttribute("for", "med")

    label2.innerText = "Medium"

    // High Priority 
    const highpriority = document.createElement("input");
    highpriority.setAttribute("name", "priority")
    highpriority.setAttribute("id", "high")
    highpriority.setAttribute("type", "radio")

    const label3 = document.createElement("label")
    label3.setAttribute("for", "high")

    label3.innerText = "High"



    priority.append(lowpriority);
    priority.append(label1);

    priority.append(medpriority);
    priority.append(label2);

    priority.append(highpriority);
    priority.append(label3);

    //Description
    const description = document.createElement("input");
    description.setAttribute("name", "description")
    description.setAttribute("style", "height: 100px")
    description.placeholder = "Description"

    //Notes
    const notes = document.createElement("input");
    notes.setAttribute("name", "notes")
    notes.setAttribute("style", "height: 100px")
    notes.placeholder = "Extra Notes"

    //Submit
    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.innerText = "Submit"

    form.append(title);
    form.append(dueDate);
    form.append(priority);
    form.append(description);
    form.append(notes);
    form.append(submit);
    main.append(form);
}

const toggleForm = function (){
    const form = document.querySelector("form");

    form.classList.toggle("disabled")
}


const onSubmit = function(e){
    e.preventDefault()

    var formData = new FormData(document.querySelector("form"))

    const title = formData.get("title")

    projects.push(new Project(title));
    DOM.reload();
}

export { buttonForm, toggleForm }