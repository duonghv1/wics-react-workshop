// src/components/Home.js

export default function Home() {
    return(
        <div className="home-container">
        <h1>Winnie the Pooh</h1>
        <h2>Aspiring Happiness Engineer and Honey Enthusiast</h2>
    
        <div className="home-icons">
            <a href="https://github.com/kermit-sad-frog" target="_blank"><img src="./assets/github.svg"/></a>
            <a href="https://www.linkedin.com/in/kermit-frog-4a3b4726/" target="_blank"><img src="./assets/linkedin.svg"/></a>
            <a href="mailto: thisisfake@example.com" target="_blank"><img src="./assets/mail.svg"/></a>
        </div>
        </div>
    );
}