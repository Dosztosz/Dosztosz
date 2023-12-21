function IconDesc({Title, Description, ImgUrl}){
    return(
        <div>
            <div className="foldable">
                <h4 className="text-light">{Title}</h4>
            </div>
            <div className="folded">
            <img className="img-fluid" src={ImgUrl} alt={Title}/>
            <p className="text-light">{Description}</p>

            </div>
        </div>
    )
}

export default IconDesc