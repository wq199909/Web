import React from 'react'
import "../assets/global"
import RouteApp from "@/routes/RouteApp"
import { BrowserRouter } from 'react-router-dom'
import {Provider} from "react-redux"
import makeStore from "@/store"
const store = makeStore();
export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <RouteApp/>
            </BrowserRouter>
        </Provider>
    )
}