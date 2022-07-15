import logo from "../../assets/img/logo.svg"

import './styles.css'

function Header() {
    return (
        <header id="header">
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" id="logo"></img>
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por <a href="https://www.instagram.com/denilo_diniz/" target="_blank" 
                        rel="noopener noreferrer">@denilo_diniz</a></p>
            </div>
        </header>
    )
}

export default Header