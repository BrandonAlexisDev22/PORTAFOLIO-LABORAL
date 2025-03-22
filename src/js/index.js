// CONTROL DE MENSAJES DE USUARIO
const fs = require("node:fs");

// LECTURA DE ARCHIVO JSON
const packageJSON = fs.readFileSync("../../package.json", "utf-8");

// DATOS
const data = JSON.parse(packageJSON);

// VERSIÓN
let version = data.version;

// CONTENIDO
const content = `// Este archivo se genera automáticamente
window.projectVersion = '${version}';
`;

// ESCRIBIR EL ARCHIVO
fs.writeFileSync("../js/version.js", content);

console.log(`Archivo version.js generado con la versión: ${version}`);