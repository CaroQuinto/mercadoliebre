const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res) =>{
    //res.send("Hola Mundo");  // Permite enviar texto o codigo HTML
    res.sendFile(path.join(__dirname + '/views/home.html'));  // Permite enviar un archivo HTML
});
app.get('/', (req,res) =>{
    //res.send("Hola Mundo");  // Permite enviar texto o codigo HTML
    res.sendFile(path.join(__dirname + '/css/styles.css'));  // Permite enviar un archivo HTML
});
app.get('/register.html', (req,res) =>{
    //res.send("Hola Mundo");  // Permite enviar texto o codigo HTML
    res.sendFile(path.join(__dirname + '/views/register.html'));  // Permite enviar un archivo HTML
});
app.get('/login.html', (req,res) =>{
    //res.send("Hola Mundo");  // Permite enviar texto o codigo HTML
    res.sendFile(path.join(__dirname + '/views/login.html'));  // Permite enviar un archivo HTML
});

app.use(express.static(path.join(__dirname, '/public')));
 
// app.listen(3002, () =>
//     console.log("Corriendo hacia la liebre"));

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})





