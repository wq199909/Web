import App from "./App";
import React from 'react';
import ReactDom from 'react-dom/server';
import getHTML from "./getHTML";
import loadData from "./loadData";
import makeStore from "../store";
export default async (req, res)=>{
    const context = {};
    const store = makeStore();
    await loadData(req.path, store);
    const componentHTML = ReactDom.renderToString(<App location={req.path} context={context} store={store}/>);
    const html = getHTML(componentHTML, req.path, store);
    if(context.resCode){
        res.status(context.resCode);
    }
    res.send(html);
}