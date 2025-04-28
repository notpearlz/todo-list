import {Render} from "./modules/renderDOM";
import Project from "./modules/project";
import Task from "./modules/task";

const defaultProj = new Project("Default", "Project description")
defaultProj.addTask(new Task("Default Task", 1, "Due Date", "Task Description", "Extra Notes"))

export const projects = [defaultProj];
export var currProject = 0;

export const setCurrProject = (newProject) => {
    currProject = newProject
}

export const DOM = new Render();
