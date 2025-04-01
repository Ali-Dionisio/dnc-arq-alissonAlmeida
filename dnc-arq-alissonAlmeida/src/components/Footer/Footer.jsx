import { useContext } from "react";
import { Link } from "react-router-dom"

// ASSETS
import './Footer.css'
import Logo from '../../assets/dnc-logo.svg'
import BrasilIcon from '../../assets/logoBrasil.svg'
import EUAIcon from '../../assets/logoEUA.svg'
import FaceIcon from '../../assets/face.svg'
import LinkedinIcon from '../../assets/linkedin.svg'
import InstagramIcon from '../../assets/insta.svg'
import TwiterIcon from '../../assets/x.svg'

// COMPONENT
import Button from "../Button/Button";

// CONTEXT 
import { AppContext } from "../../contexts/AppContext";

function Footer () {
    const appContext = useContext(AppContext);
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={Logo} className="footer-logo"/>
                        <p className="grey-1-color">
                            {appContext.languages[appContext.language].general.footerLogoText}
                        </p>
                        <div className="d-flex social-links">
                            <a href="#" target="_blank">
                                <img src={FaceIcon} />
                            </a>
                            <a href="#" target="_blank">
                                <img src={TwiterIcon} />
                            </a>
                            <a href="#" target="_blank">
                                <img src={LinkedinIcon} />
                            </a>
                            <a href="#" target="_blank">
                                <img src={InstagramIcon} />
                            </a>
                        </div>
                    </div>
                        <div className="d-flex mobile-fd-column">
                            <div className="footer-col">
                                <h3>{appContext.languages[appContext.language].general.pages}</h3>
                                <ul>
                                    <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                    <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                                    <li><Link to="/projects">{appContext.languages[appContext.language].menu.project}</Link></li>
                                    <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h3>{appContext.languages[appContext.language].menu.contact}</h3>
                                <p className="grey-1-color">
                                    R. Justino Cobra, 61 – Vila Ema | 
                                    São José dos Campos – SP | 
                                    CEP 12243-030 
                                </p>
                                <p className="grey-1-color">
                                    suporte@escoladnc.com.br
                                </p>
                                <p className="grey-1-color">
                                    (19) 99187-4342
                                </p>
                            </div>
                        </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p className="grey-1-color">Copyright © DNC - 2024</p>
                    <div className="langs-area d-flex">
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('br')}>
                            <img src={BrasilIcon} height="29px"/>
                        </Button>
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('en')}>
                            <img src={EUAIcon} height="29px"/>
                        </Button> 
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer