const ProjectCard = ({title, description, image}) => {
    return ( 
        <div className="project-card">
        <img src={image} alt="Profile" className="project-image"/>
        <h2>
            {title}</h2>
            <br />
            <p>
                 <br />
                {description}
            </p>
            <button className="project-button">Bekijk project</button>
        </div>
     );
}
 
export default ProjectCard;