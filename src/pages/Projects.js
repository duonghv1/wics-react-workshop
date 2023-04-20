// src/components/Projects.js
import { ProjectCard } from "../components/ProjectCard/ProjectCard";

import './Projects.css'

export default function Projects() {

    const project = {
        imageUrl: "src/assets/adalovelace2.jpeg",
        imageAlt: " A picture of Ada Lovelace",
        title: "My Project",
        description: "A description of my project",
        likes: 42,
      };

    return (
        <ProjectCard project={project}>

        </ProjectCard>
    );
}