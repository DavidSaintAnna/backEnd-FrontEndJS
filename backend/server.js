import express from 'express';
import birthdayRoute from './routes/birthday.js';
import sectorRoute from './routes/sector.js';
import ramalRoute from './routes/ramal.js';
import cors from "cors";
import setRoute from './routes/setRoute.js'



const app = express();
app.use(express.json());
app.use(cors());
app.use("/register", setRoute)
app.use("/birthday", birthdayRoute)
app.use("/sector", sectorRoute)
app.use("/ramal", ramalRoute);
app.listen(8080, () => {
    console.log('eae gleyson');
})