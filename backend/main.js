const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, { useNewUrlParser: true });

// Conexión a la base de datos
client.connect(function(err) {
  if (err) {
    console.log("Waiting for MongoDB to be ready");
    setTimeout(connect, 1000);
  } else {
    const db = client.db("mydatabase");
    console.log("Connected successfully to MongoDB");

    // Creación de colecciones
    const users = db.collection("users");
    const cliente = db.collection("cliente");
    const administrador = db.collection("administrador");
    const usuario_administrador = db.collection("usuario_administrador");
    const publicacion = db.collection("publicacion");

    // Creación de índices únicos
    users.createIndex({ "ID_Usuario": 1 }, { unique: true });
    cliente.createIndex({ "ID_Cliente": 1 }, { unique: true });
    administrador.createIndex({ "ID_Administrador": 1 }, { unique: true });
    usuario_administrador.createIndex({ "ID_Usuario_Administrador": 1 }, { unique: true });
    publicacion.createIndex({ "ID_Publicacion": 1 }, { unique: true });

    // Funciones de creación de documentos
    function create_user(nombre, apellido, mail, contrasena, edad) {
      const user = {
        "Nombre": nombre,
        "Apellido": apellido,
        "Mail": mail,
        "Contrasena": contrasena,
        "Edad": edad
      };
      return users.insertOne(user);
    }

    function create_cliente(id_usuario) {
      const cliente_doc = {
        "ID_Usuario": id_usuario
      };
      return cliente.insertOne(cliente_doc);
    }

    function create_administrador(id_usuario) {
      const administrador_doc = {
        "ID_Usuario": id_usuario
      };
      return administrador.insertOne(administrador_doc);
    }

    function asignar_administrador(id_usuario, id_administrador) {
      const usuario_administrador_doc = {
        "ID_Usuario": id_usuario,
        "ID_Administrador": id_administrador
      };
      return usuario_administrador.insertOne(usuario_administrador_doc);
    }

    function create_publicacion(id_usuario, id_publicacion) {
      const publicacion_doc = {
        "ID_Usuario": id_usuario,
        "ID_Publicacion": id_publicacion
      };
      return publicacion.insertOne(publicacion_doc);
    }
  }
});
