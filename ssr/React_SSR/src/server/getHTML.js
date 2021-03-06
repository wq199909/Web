
import getScirpts from "./getScripts";
import getLinks from "./getLinks";
export default (componentHTML, path, store) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link href="favicon.ico" rel="shortcut icon">
        ${getLinks()}
    </head>
    <body>
        <div id="root">${componentHTML}</div>
        <script>
            window.pageDatas = ${JSON.stringify(store.getState())};
            window.requestPath = "${path}";
        </script>
        ${getScirpts()}
    </body>
    </html>
    `
}