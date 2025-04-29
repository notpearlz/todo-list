import { currProject, projects, setCurrProject } from "../..";
import Project from "../project";
import { reload } from "../renderDOM";

export default function sidebar(projects){
    const main = document.querySelector("main")
    const sidebar = document.createElement("div");

    sidebar.classList.add("sidebar");


    const newProjectBtn = document.createElement("button");
    newProjectBtn.classList.add("newProject");
    newProjectBtn.classList.add("project");
    newProjectBtn.innerHTML = "+ New Project";
    newProjectBtn.addEventListener("click", newProject)

    sidebar.append(newProjectBtn);


    for(let i = 0; i < projects.length; i++){
        const project = document.createElement("button");
        
        project.classList.add("project");
        project.innerHTML = projects[i].getName();

        project.addEventListener("click", () => {
            setCurrProject(i);
            reload();
        })
        sidebar.append(project);
        
    }



    main.append(sidebar);
}





const newProject = () => {

    //Return if theres already a button form
    const test = document.querySelector(".buttonform");
    if(test) {
        return;
    } 
    
    const content = document.querySelector(".content");

    //Create a task form
    const form = document.createElement("form");
    form.classList.add("buttonform");


    const title = document.createElement("input");
    title.name = "title";
    title.placeholder="title";

    const description = document.createElement("textarea");
    description.name = "description";
    description.placeholder="description";


    //Submit
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.innerText="Submit";
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(document.querySelector(".buttonform"));

        const title = data.get("title")
        const description = data.get("description")

        projects.push(new Project(title, description))

        reload();        
        form.remove();
    })

    const close = document.createElement("button");
    close.type = "button";
    close.innerText="Close";
    close.addEventListener("click", () => {

        form.remove();
    })

    form.append(title);
    form.append(description);
    form.append(submit);
    form.append(close);
    content.append(form);
}