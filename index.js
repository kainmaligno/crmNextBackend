const { ApolloServer } = require("apollo-server");
const typeDefs = require("./db/schema.graphql");
const resolvers = require("./db/resolvers");
const connectDB = require("./config/db");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: ".env" });

/**
 * Conectar a la base de datos
 */
connectDB();
/**
 * Crear un Apollo server @ApolloServer
 * require una confirguracion
 *
 */

//servidor Apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,
  connectToDevTools: true,
  context: ({ req }) => {
    const token = req.headers["authorization"];
    if (token) {
      try {
        const usuario = jwt.verify(
          token.replace("Bearer ", ""),
          process.env.SECRETA
        );
        console.log(usuario);
        return { usuario };
      } catch (error) {
        console.log("Error al authenticar", error);
      }
    }
  },
});

/**
 * Inicia el servidor
 * @server
 */
//arrancar el server
server.listen().then(({ url }) => {
  console.log(`Servidor listo en la url${url}`);
});
