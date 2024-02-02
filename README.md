- PROYECTO 3, VARIABLES -

He clonado la sandbox del repositorio de LemonCode para utilizarla  como base del proyecto.

Ya que no se van a modificar, he creado cuatro constantes en vez de variables para representar los géneros musicales.

Para dar formato al texto que será el nombre del grupo he creado otra constante llamada estiloNombre.

He creado una interfaz llamada Grupo que determinará el tipo de dato para cada variable contenida.

He creado una constante para cada grupo que va a pertenecer a la interfaz Grupo
    const elemento : Interfaz = {};

Y he mostrado el nombre del grupo almacenado en la constante
    `${nombreDeLaConst}`

Para mostrar el título con formato
    console.log(`%c ${elemento.variableAMostrar}`, estiloNombre)

En la primera manera de mostrar los datos he un console.log para mostrar un texto seguido de la variable 
    console.log("texto", elemento.variable,
    \n "texto", elemento.variable, 
    ...);

En la segunda manera utilizo simplemente un console.log de cada grupo para que se muestre la información como elementos independientes
    console.log(elementoAMostrar);