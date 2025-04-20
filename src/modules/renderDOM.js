import "../styles.css"

import header from "./components/header"
import sidebar from "./components/sidebar"
import content from "./components/content";


export default class Render {

    // Render all Html related things
    constructor(){
        header();

        //make sidebar appear and reappear later
        sidebar();
        content();
    }
}
