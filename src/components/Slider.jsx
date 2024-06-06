import {artistsList} from '../datas/artistsList.js'
import sliderArrow from '../assets/objects/arrow-slider.svg'
import Sun from './Sun.jsx'
import '../style/Slider.css'
import React, { useState } from 'react';
import Cards from './Cards.jsx'
import circle from '../assets/objects/circle.png'

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
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
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
            <Sun slider={Slider}/>
            <img src={circle} alt="" className='slider-circle-big slider-circle' style = {sunXYStyle}/>
            <img src={circle} alt="" className='slider-circle-medium slider-circle' style = {sunXYStyle}/>
            <img src={circle} alt="" className='slider-circle-little slider-circle' style = {sunXYStyle}/>
        </article>
    )
}

export default Slider