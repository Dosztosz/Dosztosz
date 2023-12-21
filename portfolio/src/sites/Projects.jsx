import Project from "../components/Project"

import mlnthx from "../assets/img/mlnthx.png"
import cinestock from "../assets/img/cinestock.png"
import chatnow from "../assets/img/chatnow.png"

function Projects() {
    return(
        <div className="container">
            <h3 className="h1 mt-5 mb-5 text-light">My Projects</h3>
            <div className="grid-3 projects-list text-light">
            <Project title='Million Thank you' img={mlnthx} description='A web app for expressing appreciation to Covid-19 pandemic frontline workers. User-uploaded image with a thank you message is displayed in a popup modal. A collaborative project.'/>
            <Project title='Cinestock' img={cinestock} description='A movie web app that requests users to create their personal account to be able to search info on movies, genres, directors and to save favourite movies to their account.'/>
            <Project title='Native Chat App' img={chatnow} description='A chat application for mobile devices (Android and iOS) that provides users with a chat interface and the possibility to exchange text messages, images and share their location.'/>
            <Project title='Million Thank you' img={mlnthx} description='A web app for expressing appreciation to Covid-19 pandemic frontline workers. User-uploaded image with a thank you message is displayed in a popup modal. A collaborative project.'/>
            <Project title='Cinestock' img={cinestock} description='A movie web app that requests users to create their personal account to be able to search info on movies, genres, directors and to save favourite movies to their account.'/>
            <Project title='Native Chat App' img={chatnow} description='A chat application for mobile devices (Android and iOS) that provides users with a chat interface and the possibility to exchange text messages, images and share their location.'/>
        </div>
        </div>
    )
}
export default Projects