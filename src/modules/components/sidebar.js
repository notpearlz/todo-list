import { buttonForm, toggleForm } from "./buttonform";

export default function sidebar(){
    const main = document.querySelector("main")
    const div = document.createElement("div");

    div.classList.add("sidebar");


    const newProjectBtn = document.createElement("button");
    newProjectBtn.classList.add("newProject");
    newProjectBtn.classList.add("project");
    newProjectBtn.innerHTML = "+ New Project";
    newProjectBtn.addEventListener("click", () => { 
        toggleForm();
        console.log("toggle")
    })


    div.append(newProjectBtn);

    main.append(div);
    buttonForm();

}