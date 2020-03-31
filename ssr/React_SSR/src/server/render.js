import App from "./App";
import React from 'react';
import ReactDom from 'react-dom/server';
import getScirpts from "./getScripts";
import getLinks from "./getLinks";
export default (req, res)=>{
    const componentHTML = ReactDom.renderToString(<App />);
    console.log(componentHTML);
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        ${getLinks()}
    </head>
    <body>
        <div id="root">${componentHTML}</div>
        ${getScirpts()}
    </body>
    </html>
    `
    res.send(html);
}