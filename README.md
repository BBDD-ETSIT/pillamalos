

<br/><br/>


# Plataforma que usa Machine Learning e Inteligencia Artificial para pillar a los malos

## 1. Descripción de la plataforma

Esta plataforma ha sido desarrollada por la brigada de ciberinteligencia de la policía siguiendo el patron MVC (Modelo-Vista-Controlador) y en el ODM de MongoDB para NodeJS: Mongoose. Sirve para conectarla a una base de datos de mensajes y la plataforma usando las técnicas más avanzadas de Machine Learning e Inteligencia Artificial podrá a partir de un nombre de usuario obtener su identidad real.

La **vista** es una interfaz web basada en HTML y CSS que permite realizar las acciones deseadas sobre los mensajes.

El **modelo** es la representación de la información de los mensajes. El modelo que usa esta plataforma es el siguiente:

```
MensajeSchema = Schema({
    url: String,
    date: Date,
    content: String,
    renderedContent: String,
    id: Number,
    user: Object
});
```

El **controlador** ejecuta acciones sobre el modelo Mensaje. Posee un método filterMensajes pero que no está desarrollado ya que cada base de datos de mensajes es diferente. Entonces esta es la parte a personalizar para poder enganchar esta plataforma a cualquier base de datos de mensajes (Twitter, Telegram, Whatsapp, emails, ...)


## 4. Descargar e instalar el código de la plataforma

Abra un terminal en su ordenador y siga los siguientes pasos.

El proyecto debe clonarse en el ordenador desde el que se está trabajando con:

```
$ git clone https://github.com/BBDD-ETSIT/pillamalos
```

y entrar en el directorio de trabajo

```
$ cd pillamalos
```

Una vez dentro de la carpeta, se instalan las dependencias con:

```
$ npm install
```

IMPORTANTE: En este momento lo ideal es abrir el código de la plataforma en un editor de código (Atom, Sublime Text, ...) y observar cómo se llama la base de datos y la colección. Habrá que restaurar el dump en JSON que tengamos con ese nombre de base de datos y esa colección para que la plataforma conecte a MongoDB adecuadamente.
También tendremos que implementar el método filterMensajes que está en controllers/mensaje.js para que filtre los mensajes y haga un find con el username adecuado y lo devuelva.

Por último podemos arrancar la plataforma con:

```
$ npm start
```

Abra un navegador y vaya a la url "http://localhost:8001" para ver la plataforma funcionando. Si la plataforma puede conectar a la base de datos y colección correcta y recibe filtrados los mensajes del username correcto, usará la Machine Learning e Inteligencia Artificial para devolver el nombre real del usuario buscado.

**NOTA: Cada vez que se cambie el código de la plataforma debemos parar y arrancar de nuevo el servidor. Para ello, desde el terminal pulse ctrl+c para parar y arranque de nuevo con npm start**
