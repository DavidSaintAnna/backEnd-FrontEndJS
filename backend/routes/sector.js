import express from "express";
import { x } from "../getFiles/getfiles.js";

const router = express.Router();

router.get("/:sector", (req, res) => {
    const sector = req.params.sector;
    const filteredEmployees =
        x().filter((employee) => employee.setor === sector)

    res.json(filteredEmployees);
});



export default router;