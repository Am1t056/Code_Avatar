import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Pages/SignUp'
import Details from './Pages/Details'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path="/detail" element={<Details/>} />
    </Routes>
    </>
  )
}

export default App