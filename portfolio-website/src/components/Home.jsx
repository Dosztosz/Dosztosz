import Icon from '../img/React-icon.svg.png'

function Home() {
    return(
        <div className='wrapper'>
            
            <div className="h-90 text-center pt-60 text-white index">
                <h1>Hi my name is Tomek</h1>
                <p>Junior Frontend Developer with React and some cool personal projects</p>
                <button>View my Work</button>
            </div>
            <div className='React-Wrapper'>
                <img className='RoundLogo' src={Icon}></img>
            </div>
            
        </div>
        

    )

}

export default Home