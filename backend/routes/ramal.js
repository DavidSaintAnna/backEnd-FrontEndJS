import express from "express";
import { x } from "../getFiles/getfiles.js";



const router = express.Router();
router.get('/', (req, res) => {
    const employeesRAMAL = x().sort((employee1, employee2) => employee1.nome.localeCompare(employee2.nome)).map((employee) => employee);

    res.json(employeesRAMAL);

})


export default router;