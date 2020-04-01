import render from "./render"
import { getMovies } from "../services/MovieService";
import {createProxyMiddleware} from "http-proxy-middleware"
const express = require('express');
const app = express();

app.use(express.static("./public"))

app.use(
    "/api",
    createProxyMiddleware({
        target: "http://yuanjin.tech:5005/",
        changeOrigin: true
    })
)

app.get("*", render)
app.listen(8080, ()=>{
    console.log("server start on 8080")
});