import "../styles.css"

import header from "./components/header"
import sidebar from "./components/sidebar"
import content from "./components/content";

import { projects } from "..";

export class Render {

    // Render all Html related things
    constructor(){

        reload();
    }

    



}
export const reload = () => {
    const body = document.querySelector("body");
    body.innerHTML = ""


    const head = document.createElement("header");

    const main = document.createElement("main");

    body.append(head);
    body.append(main);


    header();
    sidebar(projects);
    content();
}