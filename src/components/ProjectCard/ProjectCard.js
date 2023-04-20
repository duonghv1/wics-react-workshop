import { useState } from 'react';

import './ProjectCard.css'

export const ProjectCard = (project) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [likes, setLikes] = useState(project.likes);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const handleLike = () => {
    setLikes(likes + 1);
    };

    return (
    <div className={isExpanded ? 'expanded-project-card' : 'project-card'}>

        <div onClick={toggleExpansion}>
            <img src={project.imageUrl} 
                className="card-img"
                alt={project.imageAlt} />
            <h2 className="card-title">
                    {project.title}
            </h2>

            {isExpanded && 
                    <div className="card-desc">{project.description}</div>
            }

        </div>
        
        <div className="project-actions">
        <div className="like-count">{likes} likes</div>
        <button onClick={handleLike}>❤️</button>
        </div>

    </div>
    );
};