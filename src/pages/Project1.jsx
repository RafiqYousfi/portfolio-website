const Project1 = () => {
    return (
        <div className="project-page">

            <h1 className="project-title">Project</h1>

            <div className="project-info">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>

                {/* GitHub placeholder circle */}
                <div className="github-circle">
                    <span className="cat-icon">🐱</span>
                </div>
            </div>

            {/* Placeholder image boxes */}
            <div className="project-images">
                <div className="placeholder-box">foto website 1</div>
                <div className="placeholder-box">foto website 2</div>
                <div className="placeholder-box">foto website 3</div>
            </div>

        </div>
    );
}

export default Project1;