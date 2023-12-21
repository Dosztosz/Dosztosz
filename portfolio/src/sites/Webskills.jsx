import JS from "../assets/img/js.png"
import html from "../assets/img/html.png"
import react from "../assets/img/react.png"
import php from "../assets/img/php.png"
import bootstrap from "../assets/img/bootstrap.webp"

function WebSkills(){
    return(
        <div className="container text-center">
            <h1 className="text-light text-center">Web Development Skill</h1>
            <div className="d-flex flex-wrap justify-content-center">
                <img className="img-fluid max-150px" src={JS} />
                <img className="img-fluid max-150px" src={html} />
                <img className="img-fluid max-150px" src={react} />
                <img className="img-fluid max-150px" src={php} />
                <img className="img-fluid max-150px" src={bootstrap} />
                <img className="img-fluid max-150px" src="" />
                <img className="img-fluid max-150px" src="" />
                <img className="img-fluid max-150px" src="" />
            </div>
            <p className="text-light p-3">To see my skills in action, check out my portfolio or get in touch and tell me about your project idea!</p>
            <button className="btn btn-primary m-3">Download my CV</button>
        </div>
    )
}
export default WebSkills