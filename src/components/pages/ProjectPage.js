import React from "react";

function ProjectPage() {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.deployedLink} className="btn btn-primary m-3" target="_blank" rel="noopener noreferrer">View Finished Product</a>
                <a href={props.githubLink} className="btn btn-primary m-3" target="_blank" rel="noopener noreferrer">View GitHub Repository</a>
            </div>
        </div>
    );
}

export default ProjectPage;