import {Route, Routes} from "react-router-dom"
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import HomePage from './pages/homepage/HomePage'

function AppRoutes() {
    return(
        
        <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Contact" element={<Contact />}/>
        </Routes>
        
    )
}

export default AppRoutes