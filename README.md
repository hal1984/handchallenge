# HandChallenge

HandChallenge es un proyecto que implementa un intérprete para el Hand Programming Language (HPL). Este lenguaje de programación utiliza una serie de gestos de mano para manipular una memoria de bytes y mostrar caracteres ASCII.

Este proyecto es un challenge encontrado en el siguiente repositorio: [hand-challenge](https://github.com/jesus-seijas-sp/hand-challenge).

## Estructura del Proyecto

- `index.js`: Contiene la implementación del intérprete HPL.
- `test.js`: Contiene las pruebas unitarias para el intérprete.
- `eslint.config.mjs`: Configuración de ESLint para el proyecto.
- `package.json`: Archivo de configuración del proyecto y dependencias.
- `.gitignore`: Lista de archivos y directorios que Git debe ignorar.

## Instalación

1. Clona el repositorio:
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd handchallenge
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Uso

Para ejecutar el intérprete, puedes importar y usar la función `translate` desde `index.js`:

```js
const { translate } = require('./index');

const result = translate('👉👆👆👆👆👆👆👆👆🤜👇👈👆👆👆👆👆👆👆👆👆👉🤛👈👊');
console.log(result); // Debería mostrar "Hello"