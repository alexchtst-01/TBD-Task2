import { Router } from "express";
import {
  createBook,
  deleteBookbyId,
  editBookbyId,
  getBook,
  getBookByID,
  getBookbyName,
} from "../controller/BookController.js";

const BookRoutes = Router();

BookRoutes.get("/books", getBook);
BookRoutes.get("/book/:id", getBookByID);
BookRoutes.get("/bookname", getBookbyName);
BookRoutes.post("/addbook", createBook);
BookRoutes.patch("/updatebook/:id", editBookbyId);
BookRoutes.delete("/deletebook/:id", deleteBookbyId);

export default BookRoutes;
