const Project = () => {
    return (
        <div className="projects-wrapper">

            <div className="project-card">
                <div className="project-image">p1 foto</div>
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
                <div className="project-image">p2 foto</div>
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