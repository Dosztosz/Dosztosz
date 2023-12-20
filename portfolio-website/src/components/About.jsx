
import IconDesc from "./IconDesc"
import ProgramIcon from "./ProgramIcon"

import IE from "../img/iexplorer.PNG"
import DS from "../img/ds.PNG"
import PC from "../img/computer.PNG"
import ST from "../img/stick.PNG"

function About() {
    return(
        <div>
            <h2>About</h2>
            <div className="row">
                <div><IconDesc Title="Responsive" Description="My layouts look and work great on any screen size." ImgUrl={DS}/></div>
                <div><IconDesc Title="Intuitive" Description="Easy to understand and navigate user interface (UI/UX)." ImgUrl={IE}/></div>
                <div><IconDesc Title="Fast" Description="I aim for the shortest loading times for my projects." ImgUrl={PC}/></div>
                <div><IconDesc Title="Accessible" Description="Designed to function properly with assistive technologies and ensure usability for every visitor." ImgUrl={ST}/></div>
            </div>
            <h3>Programs / Languages</h3>
            <div className="grid-4">
                <ProgramIcon />
                <ProgramIcon />
                <ProgramIcon />
                <ProgramIcon />
            </div>
        </div>

    )

}

export default About