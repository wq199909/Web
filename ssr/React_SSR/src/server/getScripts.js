import fs from "fs";
export default ()=>{
    const result = fs.readdirSync('./public/js')
    .filter(file=>file.endsWith('js'))
    .map(file=>`<script src="./js/${file}"></script>`);
    console.log(result);
    return result.join("\n");
}