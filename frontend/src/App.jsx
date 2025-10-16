import './App.css'
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import AppRoutes from "./AppRoutes"



function App() {
  
  return (
    <div className='app_layout'>
      <NavBar />
      <div className='content'>
        <AppRoutes />  
      </div>
      <Footer />
    </div>
  )
}

export default App
