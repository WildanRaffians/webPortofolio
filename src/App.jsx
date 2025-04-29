import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"

function App() {
  
  return(
    <div>
      {/* Navbar */}
      <Navbar/>
      
      {/* Contents */}
      <HomePage/>
      
      {/* Footer */}
      <Footer/>
    </div>
  ); 
}

export default App
