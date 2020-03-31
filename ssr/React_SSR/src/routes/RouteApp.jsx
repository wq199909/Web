import React from 'react'
import Header from "@/component/Header"
import routes from "./RouteConfig"
import {renderRoutes} from "react-router-config"
export default function RouteApp() {
    return (
        <div>
            {renderRoutes(routes)}
        </div>
    )
}
