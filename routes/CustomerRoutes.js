import { Router } from "express";
import { addBroughtBook, getCustomer, getCustomerAndBook } from "../controller/CustomerController.js";

const CustomerRoutes = Router()

CustomerRoutes.get("/customer", getCustomer)
CustomerRoutes.get("/customer/:id", getCustomerAndBook)
CustomerRoutes.post("/customer/addbook", addBroughtBook)

export default CustomerRoutes