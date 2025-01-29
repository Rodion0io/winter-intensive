import { Route, Routes } from 'react-router-dom'

import './App.css'
import MainPage from './Components/Pages/MainPage/MainPage'
import Layout from './Components/Layout/Layout'
import ConcreteFilmPage from './Components/Pages/ConcreteFilmPage/ConcreteFilmPage'
import ChoicePlacePage from './Components/Pages/choicePlacePage/choicePlacePage'

function App() {

  return (
    <>
      <Routes>
        
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='/film/:id' element={<ConcreteFilmPage/>}/>
          <Route path='/film/:id/choice' element={<ChoicePlacePage/>}/>
          <Route path='*' element={<h1>Not found</h1>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
