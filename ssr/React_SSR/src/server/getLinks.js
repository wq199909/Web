import fs from "fs";
export default ()=>{
    const result = fs.readdirSync('./public/css')
    .filter(file=>file.endsWith('css'))
    .map(file=>`<link rel="stylesheet" href="./css/${file}"></link>`);
    console.log(result);
    return result.join("\n");
}