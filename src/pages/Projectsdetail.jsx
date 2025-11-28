import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects.js";

const Projectsdetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [projectList, setProjectList] = useState(projects);

  const project = projectList.find((p) => p.id === Number(projectId));

  if (!project) {
    return <div>Product niet gevonden!</div>;
  }

  return (
    <section className="project-page">
      <button onClick={() => navigate("/projects")}>← Terug naar home</button>

      <h1 className="project-title"> {project.title}</h1>

      <div className="project-info">
        <p>
        {project.description}
        </p>

        <div className="github-circle">
         <a href={project.github} target="_blank"><img src="/images/github.png" alt="" /></a>
        </div>
      </div>

      <div className="project-images">

        <img src={project.image} alt="" className="placeholder-box"/>

      </div>

    

    
    </section>
  );
};

export default Projectsdetail;
