// src/components/Projects.js
import { ProjectCard } from "../components/ProjectCard/ProjectCard";

export default function Projects() {

    const project = {
        imageUrl: "src/assets/adalovelace2.jpeg",
        title: "My Project",
        description: "A description of my project",
        tech: "React, Node.js, MongoDB",
        likes: 42,
      };

    return (
        <ProjectCard project={project}>

        </ProjectCard>
    );
}