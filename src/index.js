import Render from "./modules/renderDOM";
import Project from "./modules/project";
import Task from "./modules/task";

const defaultProj = new Project("Default")
defaultProj.addTask(new Task("Default Task", "Description", "DueDate", "1"))

export const projects = [defaultProj];
export var currProject = 0;



export const DOM = new Render();
