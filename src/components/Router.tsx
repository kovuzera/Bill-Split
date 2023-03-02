import React from 'react'
import  { Routes, Route } from 'react-router-dom'
import { CreateAccount } from '../Pages/CreateAccount'
import { Home } from '../Pages/Home'
import Landing from '../Pages/Landing'


export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/createaccount" element={<CreateAccount/>} />
        </Routes>
    )
}