import './projects.css'
const projects = [{
    id: 1,
    Title: "San Jose Urban Forest",
    Year: "Aug 2023 - Present",
    Description: `A computer vision based solution to detect tree canopies through aerial imagery. The solution
    was proposed to The City of San Jose and won the 2024 SJSU Research Competition.`,
    TechStack: `Python, PyTorch, OpenCV, ArcGIS`
}, {
    id: 2,
    Title: "LLM Paper Explainer",
    Year: "Jan 2024 - Present",
    Description: `Engineered a tool in order to organize papers for research and created an interface
    to allow users to highlight text and generate ChatGPT outputs to explain content.`,
    TechStack: `ReactJS, Firebase, CSS, GPT, LLM`
}, {
    id: 3,
    Title: "Geodesic Dome",
    Year: "Aug 2021 - Dec 2021",
    Description: `Created a PyPI library that generates a Geodesic Dome object which can be used to store information at its vertices. 
    The library comes with a series functions to help manipulate this data structure. https://pypi.org/project/geodome/`,
    TechStack: `Python, Numba, Docker, Javascript`
} ,{
    id: 4,
    Title: "Emerge Digital",
    Year: "July 2022 - Dec 2022",
    Description: `Helped develop a mental health web application where users in a profession can match and get help/advice
    from other more experienced individuals in the same occupation.`,
    TechStack: `MongoDB, Express, ReactJS, NodeJS`
} ,{
    id: 5,
    Title: "Decision Transformer",
    Year: "Jan 2024 - Present",
    Description: `This project represents some of my research work I'm currently doing. I'm exploring how transformers can be
    used in offline reinforcement learning problems.`,
    TechStack: `Python, PyTorch, OpenAI Gym, NLP`
},{
    id: 6,
    Title: "AudioGPT",
    Year: "June 2024 - Present",
    Description: `A tool that utilizes retrieval augmented generation (RAG) and a LLM to ingest audio files
    and answer user queries.`,
    TechStack: `ReactJS, Django, PostgreSQL, Python`
}]



export default function Project(){
    return (<div className="projects-container">

        {projects.map(function(project){
            return(<div key={project.id} className="project-card">
                <div className="project-card-header">
                    <div className="terminal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-terminal" viewBox="0 0 16 16">
  <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
  <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                        </svg>
                    </div>

                    <div className="git-link">
                        <a className="git-link-icon" href='https://github.com/mchoccie?tab=repositories'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                        </a>
                    </div>
                </div>
                <div className="project-card-content">
                    <div className="Title">{project.Title}</div>
                    <div className="Year">{project.Year}</div>
                    <div className="Description">{project.Description}</div>
                </div>
                <div className="project-card-techstack">
                    {project.TechStack}
                </div>
            </div>)
        })}
        
    </div>)
}