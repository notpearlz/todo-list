import { buttonForm, toggleForm } from "./buttonform";

export default function sidebar(projects){
    const main = document.querySelector("main")
    const sidebar = document.createElement("div");

    sidebar.classList.add("sidebar");


    const newProjectBtn = document.createElement("button");
    newProjectBtn.classList.add("newProject");
    newProjectBtn.classList.add("project");
    newProjectBtn.innerHTML = "+ New Project";
    newProjectBtn.addEventListener("click", () => { 
        toggleForm();
        console.log("toggle")
    })

    sidebar.append(newProjectBtn);


    for(let i = 0; i < projects.length; i++){
        const project = document.createElement("button");
        
        project.classList.add("project");
        project.innerHTML = projects[i].getName();

        sidebar.append(project);
        
    }



    main.append(sidebar);
    buttonForm();

}