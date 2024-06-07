import { Router } from "express";
import { addAuthor, getAllAuthor, getAuthorbyId, updateAuthor } from "../controller/AuthorController.js";

const AuthorRoutes = Router()

AuthorRoutes.get("/author", getAllAuthor);
AuthorRoutes.get("/author/:id", getAuthorbyId);
AuthorRoutes.patch("/author/:id", updateAuthor)
AuthorRoutes.post("/author", addAuthor)

export default AuthorRoutes