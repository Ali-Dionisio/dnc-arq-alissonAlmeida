// import { useContext } from 'react'
import Button from "../components/Button/Button"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"
import ProjectsList from "../components/ProjectsList/ProjectsList"


// CONTEXT 
// import { AppContext } from '../contexts/AppContext'
function Home() {
    // const appContext = useContext(AppContext)
    return (
        <>
            <Header/>
                <Button buttonStyle="secondary" arrow>Olá</Button>
                <div className="container">
                    <Hero/>
                    <ProjectsList/>
                </div>
            <Footer/>
        </>
    )
}
export default Home