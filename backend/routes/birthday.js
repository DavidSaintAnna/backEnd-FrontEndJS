import express from "express";
import { x } from "../getfiles/getfiles.js";


const router = express.Router();

router.get("/:month", (request, response) => {
    const monthEmployeeFn = (employee) => {
        const { month: targetMonth } = request.params;
        const [month] = employee.dataNascimento.split("/").map(Number);

        return month === +targetMonth;
    };
    const birthDaysofTheMonth = x().filter(monthEmployeeFn);
    return response.json(birthDaysofTheMonth);
});

export default router;