import swaggerAutogen from "swagger-autogen";

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/routes/api.js"];

const doc = {
  info: {
    title: "Following System API",
    description: "A simple following system API",
  },
  host: "localhost:3000",
  basePath: "/api",
  schemes: ["http"],
};

swaggerAutogen()(outputFile, endpointsFiles, doc).then(() => {
  import("./src/server.js");
});
