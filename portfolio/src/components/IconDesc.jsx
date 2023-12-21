function IconDesc({Title, Description, ImgUrl}){
    return(
        <div className="col p-4">
            <div className="text-center">
                <div className="img-wrapper">
                <img className="img-fluid" src={ImgUrl} alt={Title}/>
                </div>
                
                <h4 className="text-light arrow">{Title}</h4>
                <p className="text-light">{Description}</p>
                
            </div>
        </div>
    )
}

export default IconDesc