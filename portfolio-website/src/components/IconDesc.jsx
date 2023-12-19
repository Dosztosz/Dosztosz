function IconDesc({Title, Description, ImgUrl}){
    return(
        <div className="center" style={{margin: 'auto', textAlign: 'center'}}>
            <img className="smallImg" src={ImgUrl} alt={Title}/>
            <h4>{Title}</h4>
            <p className="Description">{Description}</p>
        </div>
    )
}

export default IconDesc