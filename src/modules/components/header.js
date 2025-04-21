
import img from "../../assets/images/hamburger-svgrepo-com.svg"


export default function header(){
    const header = document.querySelector("header");


    const div = document.createElement("div");
    div.classList.add("navbox")

    const title = document.createElement("h1");
    title.textContent = "Todo List";


    const hamburger = document.createElement("img");
    hamburger.setAttribute("src", img);
    hamburger.classList.add("icon");

    div.append(hamburger);
    div.append(title);
    header.append(div);
}


