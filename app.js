const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(require("./router/solicitudes")); // Corregir la ruta de importación
app.set("puerto", 50000);

// Configuración para servir archivos css
app.use('/public/css', express.static(path.join(__dirname, 'public/css'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.css')) {
      res.type('text/css'); // Establece el tipo MIME del archivo CSS
    }
  }
}));

app.use('/scripts', express.static(path.join(__dirname, '/scripts'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.type('text/js'); // Establece el tipo MIME para archivos JavaScript
    }
  }
}));

// Configuración para servidor para las imágenes
app.use('/public/imagenes', express.static(path.join(__dirname, 'public/imagenes')));

// Middleware para procesar los datos del formulario
app.use(express.urlencoded({ extended: false }));

// Importar las rutas desde el archivo de solicitudes
const solicitudes = require('./router/solicitudes');

// Usar las rutas importadas
app.use('/', solicitudes);

// Configurar la carpeta 'public' como directorio estático
app.use(express.static('public'));

app.listen(app.get("puerto"), () => {
  console.log("Servidor Express en el puerto", app.get("puerto"));
});
