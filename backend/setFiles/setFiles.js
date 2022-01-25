import fs from "fs";
export function a(users) {
    fs.readFile("./employees.json", addAndCreateFile);

    function addAndCreateFile(err, out) {
        if (err) {
            fs.writeFile("./employees.json", JSON.stringify([users]), (err, out) => {
                if (err) console.log(err);
            });
            return;
        }
        const data = JSON.parse(out.toString());
        console.log(users);
        data.push(users);

        fs.writeFile("./employees.json", JSON.stringify(data), (err, out) => {
            if (err) console.log(err);
        });
    }
    return "TESTE"
}