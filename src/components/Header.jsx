import logo from '../assets/objects/Logo.svg'
import '../style/Header.css'

const navContent = [
    {
        title:'Accueil',
        id:0,
        link:'#',
        active:false
    },{
        title:'Programmation',
        id:1,
        link:'#',
        active:false
    },
    {
        title:'Logo',
        id:2,
        link:'#',
        src:logo,
        active:false
    },
    {
        title:'Infos pratiques',
        id:3,
        link:'#',
        active:false
    },
    {
        title:'Billeterie',
        id:4,
        link:'#',
        active:false
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