import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import NavbarComponent from './components/Navbar'
import Header from './pages/Header'
import Feed from './pages/Feed'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {
  return (
    <>
      <NavbarComponent />
      <Container className='text-center'>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
