import { useContext } from 'react'
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import TextAbout from "../components/AboutText/AboutText"
import Footer from "../components/Footer/Footer"

// CONTEXT 
import { AppContext } from '../contexts/AppContext'

function About() {
        const appContext = useContext(AppContext)
    return (
        <>
          <Header/>
            <Banner title={appContext.languages[appContext.language].menu.about} image="about.jpg"/>
            <div className="container">
                <TextAbout/>            
            </div>
            <Footer/>
        </>
    )
}
export default About