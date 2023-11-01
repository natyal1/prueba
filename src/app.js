//requiero a express
const express = require ("express");

// guardo su funcionalidad dentro de una variable

const app = express ();

//la defino para utilizarla
const path = require ("path");


// creo el servidor, lo pongo a "escuchar"

app.listen(3030, () => console.log ("Servidor corriendo en : http//3030/"));

// debo escribir lo que el servidor debe responder cuando le llega una peticion o req

app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/inicio.html"))
});

//ruta para html
app.get("/babbage", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/babbage.html"))
});

app.get("/berners-lee", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/berners-lee.html"))
});

app.get("/clarke", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/clarke.html"))
});

app.get("/hamilton", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/hamilton.html"))
});

app.get("/hopper", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/hopper.html"))
});

app.get("/index", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/index.html"))
});

app.get("/inicio", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/inicio.html"))
});

app.get("/lovelace", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/lovelace.html"))
});

app.get("/turing", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/turing.html"))
});


// ruta para images

/* app.get("/Ada_Lovelace_Chalon", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./images/Ada_Lovelace_Chalon.jpg"))
});
app.get("/Alan_Turing", (req,res) => {
    res.sendFile(path.resolve(__dirname,"/images/Alan_Turing.jpg"))
});
app.get("/barners-Lee", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./images/berners-Lee.jpg"))
});
app.get("/cielo-rojo-dark", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./images/cielo-rojo-dark.jpg"))
});
app.get("/Grace_M._Hopper", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./images/Grace_M._Hopper.jpg"))
});
app.get("/Joan-Clarke", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./images/Joan-Clarke.jpg"))
});
app.get("/Margaret_Hamilton", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./images/Margaret_Hamilton.jpg"))
});
app.get("/vinton_cerf", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./images/vinton_cerf.jpg"))
});
 */

app.use(express.static("public"));
