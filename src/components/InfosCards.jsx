import '../style/InfosCards.css'
import instagram from "../assets/social/instagram.svg"
import tiktok from "../assets/social/tiktok.svg"
import youtube from "../assets/social/youtube.svg"

const InfosCards = () => {
    return(
        <section className="infos-cards">
            <h1 className="infos-cards-title">Tout savoir</h1>
            <div className="infos-cards-container">
                <article className="infos-cards-card">
                    <h2 className="infos-cards-title2">Quand ?</h2>
                    <h3 className="infos-cards-title3"> 05, 06, et 07 juillet 2024</h3>
                    <p className="infos-cards-p"><span className="bold">Vendredi 05</span><br />
                    de 18h à 00h</p>
                    <p className="infos-cards-p"><span className="bold">Samedi 06 et dimanche 07</span><br/>
                    de 14h à 00h</p>
                </article>
                <article className="infos-cards-card">
                    <h2 className="infos-cards-title2">Où ?</h2>
                    <p className="infos-cards-p"><span className="bold">Le parc du Thabor</span></p>
                    <p className="infos-cards-p">Situé en plein coeur de Rennes, ambiance festive, cadre enchanteur et concerts en plein air.</p>
                </article>
                <article className="infos-cards-card">
                    <h2 className="infos-cards-title2">Nous suivre</h2>
                    <a href="https://www.instagram.com/"><img src={instagram} alt="logo instagram"className='infos-cards-social infos-cards-instagram'/></a>
                    <a href="https://www.tiktok.com/fr/"><img src={tiktok} alt="logo tiktok" className='infos-cards-social infos-cards-tiktok'/></a>
                    <a href="https://www.youtube.com/"><img src={youtube} alt="logo youtube" className='infos-cards-social infos-cards-youtube'/></a>
                </article>
            </div>
        </section>
    )
}

export default InfosCards