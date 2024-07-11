# Warp Drive Management System

## Autor
Nombre: Giovanni Romero

## Descripción
La Starship Enterprise se dirige al espacio Klingon en una misión secreta. Durante una operación rutinaria, Scotty detecta que el ordenador que gestiona el motor Warp carece de un sistema de gestión de potencia para los tres inyectores de plasma que regulan la energía del reactor de antimateria, y por tanto la velocidad de la nave.

Este proyecto implementa una solución que permite calcular el flujo de funcionamiento de cada inyector para un porcentaje de la velocidad de la luz deseado, de modo que maximice el tiempo de funcionamiento en una situación de daño dada. Además, también ofrece la velocidad máxima a la que se puede viajar de forma indefinida en una situación de daño dada.

## Requisitos
- Node.js (v12 o superior)
- npm (v6 o superior)

## Instala las dependencias
npm install

## Uso
node app.js o npm start

Esto iniciará un prompt interactivo donde se te pedirá ingresar el daño de cada inyector y el porcentaje de la velocidad de la luz.

## Ejemplo de Entrada
Daño inyector A (%): 0
Daño inyector B (%): 0
Daño inyector C (%): 0
Porcentaje de la velocidad de la luz: 100

## Pruebas
Para ejecutar las pruebas, usa el siguiente comando:

npm test

Esto ejecutará los tests definidos en Engine.test.js usando Jest.

## Estructura del Proyecto

Injector.js: Define la clase Injector que representa un inyector con sus propiedades y métodos.
Engine.js: Define la clase Engine que maneja la lógica de cálculo de flujo de los inyectores y su tiempo de funcionamiento.
app.js: Script principal que ejecuta la lógica del programa e interactúa con el usuario a través de la consola.
Engine.test.js: Contiene los tests para verificar la funcionalidad de la clase Engine.

Notas
Este proyecto sigue principios de TDD (Desarrollo Guiado por Pruebas), asegurando que cada funcionalidad está adecuadamente probada antes de ser integrada en el código base. La limpieza del código y la semántica de los nombres se han cuidado para asegurar la mantenibilidad y escalabilidad del código.