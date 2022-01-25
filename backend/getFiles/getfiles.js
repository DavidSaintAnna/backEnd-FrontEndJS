import fs from "fs";
export function x() {
    const data = fs.readFileSync("./employees.json");
    return JSON.parse(data.toString())
}