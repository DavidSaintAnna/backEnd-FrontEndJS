import express, { application } from "express";
import { a } from "../setFiles/setFiles.js"

const router = express.Router();


router.post("/", (req, res) => {
    console.log(req.body);
    res.send(a(req.body));
});




export default router;