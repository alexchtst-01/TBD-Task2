import { Router } from "express";
import { getBookAndDesc, getBookDesc } from "../controller/BookDescController.js";

const BookDescRoutes = Router();

BookDescRoutes.get("/desc", getBookDesc)
BookDescRoutes.get("/bookdescription", getBookAndDesc)

export default BookDescRoutes;
