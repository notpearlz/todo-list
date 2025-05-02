import {Render} from "./modules/renderDOM";
import {Project} from "./modules/project";
import Task from "./modules/task";

export var projects = [];
if(localStorage.getItem("projects")){
    const parsed = JSON.parse(localStorage.getItem("projects"));

    projects = parsed.map(projData => {
        const proj = new Project(projData.name, projData.description);
        proj.tasks = projData.tasks.map(
            t => new Task(t.title, t.priority, t.dueDate, t.description, t.extraNotes)
        );
        return proj;
    });


} else {

    const defaultProj = new Project("Default", "Project description")
    defaultProj.addTask(new Task("Default Task", 1, "Due Date", "Task Description", "Extra Notes"))

    projects = [defaultProj];
}
localStorage.setItem("projects", JSON.stringify(projects));

export const DOM = new Render();
