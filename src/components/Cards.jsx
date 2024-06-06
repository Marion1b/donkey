import '../style/Cards.css'

const cards = (props) => {
    return(
        <>
        {props.days.map((day) => 
            (<div className={`card card-${props.days.indexOf(day)}`}  key={day} style={{ order: props.days.indexOf(day)+1 }}>
                <h2>{day}</h2>
                <ul className='slide-artists-list'>
                    {props.artistsList.map((artist) => 
                        <>
                        {artist.day === day && 
                            (<li key={artist.id} className='slide-artist-name'>
                                {artist.name}
                            </li>)
                        }
                        </>
                    )}
                </ul>
            </div>)
        )}
        </>
    )
}

export default cards