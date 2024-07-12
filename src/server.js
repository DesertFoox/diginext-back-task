import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger-output.json" assert { type: "json" };
import dbConnect from "./db/connectDb.js";
import seedData from "./db/seed.js";
import apiRoutes from "./routes/api.js";

const app = express();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await dbConnect();
  await seedData();
  app.use("/api", apiRoutes);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
