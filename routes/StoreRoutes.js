import { Router } from "express";
import { getAllWorker, getInventoryStore, getInventorybyId, getSpesificWorkerFromStore, getStore } from "../controller/StoreController.js";

const StoreRoutes = Router();

StoreRoutes.get("/store", getStore)
StoreRoutes.get("/inventory/:id", getInventorybyId)
StoreRoutes.get("/inventory", getInventoryStore)
StoreRoutes.get("/worker", getAllWorker)
StoreRoutes.get("/worker/:id", getSpesificWorkerFromStore)


export default StoreRoutes;