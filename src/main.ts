const popRock = "🎵Pop Rock";
const rock = "🎸Rock";
const hardRock = "🤘Hard Rock";
const clasica = "🎼Clásica";

const estiloNombre = "font-size: 20px; font-weight: bold; background-color: green;";

interface Grupo {
    nombre: string;
    año: number;
    activo: boolean;
    genero: string;
}

const theBeatles : Grupo = {
    nombre: "The Beatles",
    año: 1969,
    activo: true,
    genero: `${popRock}`
};

const queen : Grupo = {
    nombre: "Queen",
    año: 1970,
    activo: false,
    genero: `${rock}`
};

const acdc : Grupo = {
    nombre: "AC DC",
    año: 1973,
    activo: true,
    genero: `${hardRock}`
};

const ludvigVB : Grupo = {
    nombre: "Ludwig van Beethoven",
    año: 1770,
    activo: false,
    genero: `${clasica}`
};

const theRollingS : Grupo = {
    nombre: "The Rolling Stones",
    año: 1962,
    activo: true,
    genero: `${rock}`
};

// PRIMERA MANERA DE MOSTRAR LOS DATOS POR CONSOLA

console.log(`%c ${theBeatles.nombre}`, estiloNombre);
console.log(
    "Año:", theBeatles.año,
    "\nEn activo:", theBeatles.activo,
    "\nGénero:", theBeatles.genero
);
console.log(`%c ${queen.nombre}`, estiloNombre);
console.log(
    "Año:", queen.año,
    "\nGénero:", queen.genero,
    "\nEn Activo:", queen.activo
);
console.log(`%c ${acdc.nombre}`, estiloNombre);
console.log(
    "Año:", acdc.año,
    "\nGénero:", acdc.genero,
    "\nEn Activo:", acdc.activo
);
console.log(`%c ${ludvigVB.nombre}`, estiloNombre);
console.log(
    "Año:", ludvigVB.año,
    "\nGénero:", ludvigVB.genero,
    "\nEn Activo:", ludvigVB.activo
);
console.log(`%c ${theRollingS.nombre}`, estiloNombre);
console.log(
    "Año:", theRollingS.año,
    "\nGénero:", theRollingS.genero,
    "\nEn Activo:", theRollingS.activo
);

console.log("\n\n\n\n")
// SEGUNDA MANERA DE MOSTRAR LOS DATOS POR CONSOLA

console.log(`%c ${theBeatles.nombre}`, estiloNombre);
console.log(theBeatles);

console.log(`%c ${queen.nombre}`, estiloNombre);
console.log(queen);

console.log(`%c ${acdc.nombre}`, estiloNombre);
console.log(acdc);

console.log(`%c ${ludvigVB.nombre}`, estiloNombre);
console.log(ludvigVB);

console.log(`%c ${theRollingS.nombre}`, estiloNombre);
console.log(theRollingS);
