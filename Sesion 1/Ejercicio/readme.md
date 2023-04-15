Para el primer ejercicio de Node.js vamos a utilizar lo aprendido en la primera sesión y crearemos nuestro propio servidor con escritura y lectura de archivos.
Si clonamos el ejercicio podremos ver un archivo **characters.json** que contiene un array de personajes de Marvel. Estos personajes tienen varios campos que indican las películas de Avengers en las que han participado, su arma, su categoría (avenger, villano, independiente...) y su nombre.
El objetivo final de este ejercicio es completar los requerimientos que pedimos añadiendo todo el código necesario en el archivo **index.js** así como haber creado los otros archivos que sean de necesidad.
¡Recuerda hacer un commit por cada paso que consigas completar!

Objetivos del ejercicio


Completa el archivo **index.js** para que podamos abrir un servidor HTTP con Node.js.


Añade un **requestHandler** a través del cual accedamos a la ruta / y se devuelva al cliente un mensaje JSON que diga:



Welcome to the Avengers' organization tool! 




Añade un nuevo endpoint **/write-avengers** que lea a través de **fs** el archivo **characters.json**. Una vez leído el archivo, usaremos su **callback** para filtrar del array de personajes todos aquellos que tengan el campo **category** con valor **Avenger**. Utilizaremos este nuevo array filtrado para crear un archivo llamado **avengers.json** en la raíz del proyecto.


Añade un nuevo endpoint **/read-avengers** que lea el fichero **avengers.json** y los devuelva en formato JSON al cliente. Asegúrate de que TODOS los personajes son de **category: "Avenger"**.


Ahora crea un nuevo enpoint **/write-the-avengers** que lea el archivo **characters.json** y filtre todos los personajes que actúan en la película **The Avengers**, es decir, que tengan dicha película en el array **movies**. Esos personajes filtrados los escríbiremos en un nuevo archivo **the-avengers.json**


Crea un nuevo endpoint **/read-the-avengers** que lea el archivo **the-avengers.json** y lo devuelva en formato JSON al cliente.



¡Punto extra!
Vaya, nos hemos dado cuenta de que si seguimos creando un archivo por película vamos a crear una gran cantidad de endpoints para cada situación. Vamos a gestionarlo de otra forma creando un único endpoint para generar nuestras películas.
Crea un endpoint **/write-movies** que lea el archivo **characters.json** y cree un objeto en JavaScript que contenga los siguientes campos:

{
	"The Avengers": [],
	"Avengers: Age of Ultron": [],
	"Avengers: Infinity War": [],
	"Avengers: Endgame": [],
}


Ahora recorre todos nuestros personajes y añade cada personaje al array correspondiente con las películas en las que actúa. Por ejemplo, **Ant-Man** será añadido a las claves **"Avengers: Infinity War"** y **"Avengers: Endgame"**.
Cuando hayas creado los arrays para cada película y asignado los personajes a cada clave dentro de este nuevo objeto, escríbelo en un archivo **movies.json**.
Ahora que hemos creado el archivo que contiene todas las películas, crearemos un enpoint nuevo para cada película:

/the-avengers
/age-of-ultron
/infinity-war
/endgame


Cada endpoint devolverá al cliente un JSON correspondiente con el array de personajes que aparecen en dicha película, que será aquel contenido en la clave correspondiente del archivo **movies.json** que leeremos.
Por ejemplo, para **/age-of-ultron** leeremos el archivo **movies.json** y devolveremos en la respuesta el array de personajes contenido en la clave **movies["Avengers: Age of Ultron"].**