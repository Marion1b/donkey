import '../style/CTABuyTickets.css'
import React, { useState } from 'react';

const CTABuyTickets = () => {
    const[isHovering, setIsHovering] = useState(false)

    return(
        <section className='buy-tickets'>
            <h1 className='buy-tickets-title' style={{color: isHovering ? '#020403' : '#FFE500'}}>Billeterie</h1>
            <p className='buy-ticket-description' style={{color: isHovering ? '#020403' : '#FFE500'}}>Billets 1 jours et forfaits</p>
            <button className="buy-tickets-button" onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}>J'achète mon billet</button>
            <div className='buy-tickets-circle' style={{transform : isHovering ? 'scale(1)' : 'scale(0)'}}></div>
        </section>
    )
}

export default CTABuyTickets;