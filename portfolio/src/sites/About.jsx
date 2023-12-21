

import IconDesc from "../components/IconDesc"


import IE from "../assets/img/iexplorer.png"
import DS from "../assets/img/ds.png"
import PC from "../assets/img/computer.png"
import ST from "../assets/img/stick.png"

function About() {
    return(
        <div className="container">
        <h2 className="text-light">About</h2>
            <p className="text-light">Hi! I’m Tomek, a frontend developer based in Poland currently looking for a full-time job. Most of the
                                        projects in my portfolio are personal, but I also have commercial experience in building landing pages and Wordpress Plugins.
                                        <br/>My projects are:</p>
            <ul>
                <li><IconDesc Title="Responsive" Description="My layouts look and work great on any screen size." ImgUrl={DS}/></li>
                <li><IconDesc Title="Intuitive" Description="Easy to understand and navigate user interface (UI/UX)." ImgUrl={IE}/></li>
                <li><IconDesc Title="Fast" Description="I aim for the shortest loading times for my projects." ImgUrl={PC}/></li>
                <li><IconDesc Title="Accessible" Description="Designed to function properly with assistive technologies and ensure usability for every visitor." ImgUrl={ST}/></li>
            </ul>
        </div>

    )

}

export default About