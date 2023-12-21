function Project({title, img, description, codeLink, App}){
    return(
        <div className="project">
            <h3 className="p-3">{title}</h3>
            <img className="img-fluid" src={img} />
            <p className="p-3">{description}</p>
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary btn-light m-2">Code</button>
                <button className="btn btn-primary btn-light m-2">App</button>
            </div>
            
        </div>
    )
}

export default Project