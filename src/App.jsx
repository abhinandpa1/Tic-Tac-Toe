import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import TicTac from './Components/TicTac/TicTac'
import LandingPage from './Components/LandingPage/LandingPage'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='tictac' element={<TicTac/>}/>
      </Routes>
      <Footer />
    </>
  )
}
export default App ;




