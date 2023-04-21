// src/components/Projects.js
import { ProjectCard } from "../components/ProjectCard/ProjectCard";

import './Projects.css'

export default function Projects() {

    const projects = [
        {
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/21/Tv_muppet_show_opening.jpg",
            imageAlt: "Kermit in The Muppet Show",
            title: "The Muppet Show",
            description: "Host. Me and my fellow Muppets put on a vaudeville show at our theatre, bringing in a famous celebrity to help out for each episode.",
            likes: 42,
        }, 
        {
            imageUrl: "https://static.wikia.nocookie.net/muppet/images/6/6b/KermitSesameStreet.png", 
            imageAlt: "Kermit in Sesame Street", 
            title: "Sesame Street Star",
            description: "One of the first Muppets designed and built by Jim Henson. Borgenicht calls Kermit 'funny, ironic, and always the voice of reason amidst the insanity around him; the calm in the eye of the storm.'",
            likes: 13,
        }, 
        {
            imageUrl: "https://toughpigs.com/wp-content/uploads/2018/12/Kermit-the-director-sf-r.jpg", 
            imageAlt: "Kermit in Director Chair", 
            title: "The Muppet Movie",
            description: "I starred in and directed the Muppet Movie which made $65.2 million in the box office. It was a wonderful experience having creative control over the film - usually I'm the one being controlled...",
            likes: 7,
        },
        {
            imageUrl: "https://www.looper.com/img/gallery/kermit-the-frogs-history-explained/l-intro-1601411424.jpg", 
            imageAlt: "Kermit Drinking Lipton", 
            title: "Lipton Tea Commercial",
            description: "I gracefully sipped some Lipton Tea in front of a camera. This commercial was broadcasted for millions of people in the United States and abroad.",
            likes: 93,
        }
    ];


    return (
        <div className="project-cards-container">
            {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
            ))}
        </div>
    );
}