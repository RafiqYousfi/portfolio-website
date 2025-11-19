import profile from "/public/images/p1foto.jpg";
import calculator from "/public/images/calculator.jpg";

const Project = () => {
    return (
        <div className="projects-wrapper">

            <div className="project-card">
            <img src={profile} alt="Profile" className="project-image"/>
            <h2>Project 1 “Calculator”</h2>
                <br />
                <p>
                     <br />
                    Begin 2025 I started a little project on learning about Python. <br />
                    I was curious of what the language is and how it is used. <br />
                    I made a little application that works as a calculator.
                </p>
                <button className="project-button">PROJECT 1</button>
            </div>

            <div className="project-card">
            <img src={calculator} alt="calculator" className="project-image" />
                <h2>Project 2 “Escaperoom”</h2>
                <br />
                <p>
                    In 2024 I made a escaperoom<br />
                    game. This was done with 4 different code languages:<br />
                    HTML, CSS, Javascript and PHP.<br />
                </p>
                <button className="project-button">PROJECT 2</button>
            </div>
            
        </div>
    );
}

export default Project;