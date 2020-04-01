import React from 'react'
import RouteApp from "@/routes/RouteApp"
import { StaticRouter } from 'react-router-dom'
import {Provider} from "react-redux"
export default function App({location, context, store}) {
    return (
        <Provider store={store}>
            <StaticRouter location={location} context={context}>
                <RouteApp/>
            </StaticRouter>
        </Provider>
    )
}
