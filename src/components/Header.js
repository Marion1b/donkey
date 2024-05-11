import logo from '../assets/objects/Logo.svg'
import '../style/Header.css'

const navContent = [
    {
        title:'Accueil',
        id:0,
        link:'#'
    },{
        title:'Programmation',
        id:1,
        link:'#'
    },
    {
        title:'Logo',
        id:2,
        link:'#',
        src:logo
    },
    {
        title:'Infos pratiques',
        id:3,
        link:'#'
    },
    {
        title:'Billeterie',
        id:4,
        link:'#'
    }
]

const Header = () =>{
    return(
        <header className='document-header'>
            <nav className='document-nav'>
                <ul className='header-ul'>
                    {navContent.map((content) => (<li key={content.id}>
                        {content.title === 'Logo' ? 
                        (<img src={content.src} alt={content.title}/>) 
                        : (content.title)}
                    </li>))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;