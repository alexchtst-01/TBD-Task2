import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import BookRoutes from "./routes/BookRoutes.js"
import AuthorRoutes from "./routes/AuthorRoutes.js"
import BookDescRoutes from "./routes/BookDescRoutes.js"

dotenv.config()
const server = express();

server.use(cors({
    origin: ["*"],
    credentials: true
}))

server.use(express.json())
server.use(BookRoutes)
server.use(AuthorRoutes)
server.use(BookDescRoutes)

server.listen(process.env.SERVER_PORT, ()=>{
    console.log("server running and up in port", process.env.SERVER_PORT)
})