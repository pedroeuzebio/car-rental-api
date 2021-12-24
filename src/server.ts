import express from "express";

import swaggerUi from "swagger-ui-express";
import {createConnection, QueryError, RowDataPacket } from "mysql2";
import swaggerFile from "./swagger.json";

import "./database";

import "./shared/container";


import { router } from "./routes";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);
app.listen(3333, () => console.log("server is running"));
