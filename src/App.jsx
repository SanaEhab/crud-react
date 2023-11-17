import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './assets/components/user/Index'
import Create from './assets/components/user/Create'
import Details from './assets/components/user/Details'
import Edit from './assets/components/user/Edit'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/user/index' element={<Index/>}/>
      <Route path='/user/create' element={<Create/>}/>
      <Route path='/user/:id' element={<Details/>}/>
      <Route path='/user/edit/:id' element={<Edit/>}/>
      <Route path='*' element={<h2 className='text-center mt-5'>User Not Found</h2>}/>
      </Routes>
  )
}

export default App