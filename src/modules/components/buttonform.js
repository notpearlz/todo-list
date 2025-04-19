function buttonForm(){
    const main = document.querySelector("main")


    const form = document.createElement("form");
    form.setAttribute("id", "buttonform");
    form.classList.add("disabled")


    const title = document.createElement("input");
    title.placeholder = "Title"

    const dueDate = document.createElement("input");
    dueDate.placeholder = "Due Date"

    const priority = document.createElement("p");
    priority.setAttribute("style", "height: 100px")
    priority.innerText = "Priority"

    const description = document.createElement("input");
    description.setAttribute("style", "height: 100px")
    description.placeholder = "Description"

    const notes = document.createElement("input");
    notes.setAttribute("style", "height: 100px")
    notes.placeholder = "Extra Notes"

    const submit = document.createElement("button");
    submit.innerText = "Submit"

    form.append(title);
    form.append(dueDate);
    form.append(priority);
    form.append(description);
    form.append(notes);
    form.append(submit);
    main.append(form);
}

function toggleForm(){
    const form = document.querySelector("form");

    form.classList.toggle("disabled")
}

export { buttonForm, toggleForm }