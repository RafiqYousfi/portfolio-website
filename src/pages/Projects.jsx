import projects from "../data/projects.js";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
    const navigate = useNavigate();
    const [projectList, setprojectList] = useState(projects);

    const goToProjectsdetail = (projectId) => {
        navigate(`/projects/${projectId}`);

      };

    
    return (
        <div className="projects-wrapper">

      {projectList.map((project) => (
        <ProjectCard project={project} onShowDetail={goToProjectsdetail}/>

      ))}
            
        </div>
    );
}

export default Project;

