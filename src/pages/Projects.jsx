import projects from "../data/projects";
import { useNavigate } from "react-router-dom";
import profile from "/public/images/p1foto.jpg";
import calculator from "/public/images/calculator.jpg";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const Project = () => {

    const [projectList, setProjectList] = useState(projects)

    
    return (
        <div className="projects-wrapper">

      {projectList.map((project) => (
        <ProjectCard title ={project.title} description={project.description} image={project.image}/>

      ))}
            
        </div>
    );
}

export default Project;

//stap 1

//maak een projects.js bestand
//maak hier een array met objecten (elk objecdt is een project)

//laadt het project bestand hier in(import)

//Stap 2
//Maak een ProjectCard component
//in een projectCard reserveer je een plek voor de titel, afbeelding en een button van je project (properties)

//Stap 3
//Ga terug naar je projects.jsx
//Loop door je data met de map functie en voor elk project laadt je jouw ProjectCard in 
