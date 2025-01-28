import './App.css'
import MainPage from './Components/Pages/MainPage/MainPage'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import ConcreteFilmPage from './Components/Pages/ConcreteFilmPage/ConcreteFilmPage'

function App() {

  return (
    <>
      <Routes>
        
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='/film' element={<ConcreteFilmPage/>}/>
          <Route path='*' element={<h1>Not found</h1>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
