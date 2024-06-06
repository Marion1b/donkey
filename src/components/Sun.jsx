import sun from '../assets/objects/sun.svg'
import '../style/Sun.css'

const Sun =(props)=>{
    return(
        <div className='sun-container'>
            <img src={sun} alt='sun object'/>
        </div>
    )
}

export default Sun