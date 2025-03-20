import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { Provider } from 'react-redux'

import { store } from './store/store'

import './App.css'

import MainPage from './Components/Pages/MainPage/MainPage'
import Layout from './Components/Layout/Layout'
import ConcreteFilmPage from './Components/Pages/ConcreteFilmPage/ConcreteFilmPage'
import ChoicePlacePage from './Components/Pages/choicePlacePage/choicePlacePage'
import PersonalDatePage from './Components/Pages/personalDatePage/PersonalDatePage'
import PayDatePage from './Components/Pages/payDatePage/PayDatePage'
import SuccessPaymantPage from './Components/Pages/paymantPage/PaymantPage'
import AuthPage from './Components/Pages/authPage/AuthPage'
import ProfilePage from './Components/Pages/profilePage/ProfilePage'
import TicketsPage from './Components/Pages/ticketsPage/TicketsPage'


function App() {

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<MainPage/>}/>
            <Route path='/film/:id' element={<ConcreteFilmPage/>}/>
            <Route path='/film/:id/choice' element={<ChoicePlacePage/>}/>
            <Route path='/film/:id/personaldate' element={<PersonalDatePage/>}/>
            <Route path='/film/:id/paydate' element={<PayDatePage/>}/>
            <Route path='/success/:id' element={<SuccessPaymantPage/>}/>
            <Route path='/login' element={<AuthPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/tickets' element={<TicketsPage/>}/>
            <Route path='*' element={<h1>Not found</h1>}/>
            <Route path='error' element={<h1>Оплата не прошла!</h1>}/>
          </Route>
        </Routes>
      </Provider>
    </>
  )
}

export default App
