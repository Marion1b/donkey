import {artistsList} from '../datas/artistsList.js'
import sliderArrow from '../assets/objects/arrow-slider.svg'
import Sun from './Sun.js'
import '../style/Slider.css'
import React, { useState } from 'react';
import Cards from './Cards.js'

const Slider = () => {
    const [days, setDays] = useState([
        'Vendredi',
        'Samedi',
        'Dimanche'
    ]);
    const previous = () => {
        const moveLast = days.pop()
        setDays([moveLast,...days])
    }
    const next = () => {
        const moveFirst = days.shift()
        setDays([...days, moveFirst])
    }
    const[sunX, setSunX] = useState(0)
    const[sunY, setSunY] = useState(0)
    const sunMove = (e) => {
        let sunXDefine = e.clientX/50
        let sunYDefine = e.clientY/50
        setSunX(sunXDefine);
        setSunY(sunYDefine);
    }

    const sunXYStyle = {
        transform : `translate(${sunX}px, ${sunY}px)`
    }

    return(
        <article className='slider' onMouseMove={sunMove}>
            <div className='slider-arrow-left'>
                <img src={sliderArrow} alt='slider arrow left' onClick={previous}/>
            </div>
            <Cards days={days} artistsList={artistsList}/>
            <div className='slider-arrow-right' style={{order:4}}>
                <img src={sliderArrow} alt='slider arrow right' onClick={next}/>
            </div>
            <Sun slider={Slider} XYStyle={sunXYStyle}/>
        </article>
    )
}

export default Slider