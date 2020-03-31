import React from 'react'
import Header from "@/component/Header"
import {renderRoutes} from "react-router-config"
export default function RouteApp({route}) {
    return (
        <div>
            <Header></Header>
            <div style={{padding: "50px"}}>
                {renderRoutes(route.routes)}
            </div>
        </div>
    )
}
