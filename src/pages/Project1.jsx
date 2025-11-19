// import githubLogo from "../assets/github.png";   
// import ik from "../assets/ik.jpg";
// import laptop from "../assets/laptop.jpg";
// import calculator from "../assets/calculator.jpg";

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

                <img 
                    src={githubLogo} 
                    alt="GitHub link" 
                    className="github-logo"
                />
            </div>

            <div className="project-images">
                {/* <img src={ik} alt="foto website 1" /> */}
                {/* <img src={laptop} alt="foto website 2" /> */}
                {/* <img src={Calculator} alt="foto website 3" /> */}
            </div>

        </div>
    );
}

export default Project1;