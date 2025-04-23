import { currProject, projects } from "../..";

export default function content(){
    const main = document.querySelector("main");

    const content = document.createElement("div");
    content.classList.add("content");

    for(let i = 0; i < projects[currProject].projects.length; i++){
        const card = document.createElement("div");
        card.classList.add("card")

        content.append(card)
    }

    main.append(content);
}