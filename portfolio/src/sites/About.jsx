

import IconDesc from "../components/IconDesc"


import IE from "../assets/img/iexplorer.png"
import DS from "../assets/img/ds.png"
import PC from "../assets/img/computer.png"
import ST from "../assets/img/stick.png"

function About() {
    return(
        <div className="container">
            <h1 className="text-light mt-5 mb-5">About</h1>
            <div className="row">
                <IconDesc Title="Responsive" Description="My layouts look and work great on any screen size." ImgUrl={DS}/>
                <IconDesc Title="Intuitive" Description="Easy to understand and navigate user interface (UI/UX)." ImgUrl={IE}/>
                <IconDesc Title="Fast" Description="I aim for the shortest loading times for my projects." ImgUrl={PC}/>
                <IconDesc Title="Accessible" Description="Designed to function properly with assistive technologies and ensure usability for every visitor." ImgUrl={ST}/>
            </div>
        </div>

    )

}

export default About