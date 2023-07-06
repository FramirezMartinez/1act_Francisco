const express = require('express');
const router = express.Router();
const path = require("path");



router.get('/vistas/index.html',(req,res) =>{
    res.sendFile(path.join(__dirname,"../vistas/index.html"));
});

router.get('/vistas/pag.html', (req, res) => {
  res.sendFile(path.join(__dirname, "../vistas/pag.html"));
});

router.get('/vistas/pag2.html', (req, res) => {
    res.sendFile(path.join(__dirname, "../vistas/pag2.html"));
  });


router.get('/vistas/pag3.html', (req, res) => {
    res.sendFile(path.join(__dirname, "../vistas/pag3.html"));
  });


router.get('/vistas/pag4.html', (req, res) => {
  res.sendFile(path.join(__dirname, "../vistas/pag4.html"));
});

router.get('/vistas/form.html', (req, res) => {
  res.sendFile(path.join(__dirname, "../vistas/form.html"));
});

// Ruta para mostrar el formulario
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

// Ruta para procesar los datos del formulario
router.post('/procesar', (req, res) => {
  const nombre = req.body.nombre;
  const email = req.body.email;
  const comentario = req.body.comentario;
 

  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



module.exports=router;
