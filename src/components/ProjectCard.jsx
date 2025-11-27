

const ProjectCard = ({project, onShowDetail}) => {
    return ( 
        <div className="project-card">
        <img src={project.image} alt="Profile" className="project-image"/>
        <h2>
            {project.title}</h2>
            <br />
            <p>
                 <br />
                {project.description}
            </p>
            <button className="project-button" onClick={() => onShowDetail(project.id)}>Bekijk project</button>
        </div>
     );
}
 
export default ProjectCard;