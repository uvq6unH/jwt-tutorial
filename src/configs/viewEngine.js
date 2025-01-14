import express from "express";

/**
 * 
 * @param {*} app -- express app 
 */
const configViewEngine = (app) => {
    app.use(express.static('./src/public'));
    app.set("view engine", "ejc");
    app.set("views", "./src/views");
}

export default configViewEngine;