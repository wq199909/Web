import React from 'react'
import "../assets/global"
import RouteApp from "@/routes/RouteApp"
import { BrowserRouter } from 'react-router-dom'

export default function App() {
    return (
        <BrowserRouter>
            <RouteApp/>
        </BrowserRouter>
    )
}
