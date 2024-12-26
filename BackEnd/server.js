import express from "express";
import authRouter from "./route/authRoute.js";
import inmateRouter from "./route/InmateRoute.js";
import VisitationRouter from './route/visitaionRoute.js'
import MedicalRouter from "./route/medicalRoute.js";
const app = express();
app.use(express.json());

app.use("/", authRouter);
app.use("/", inmateRouter);
app.use("/Visitation",VisitationRouter)
app.use('/Medical',MedicalRouter)

// server listener
const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error whie loading server", err);
    return;
  }
  console.log(`server is live at port ${PORT}...`);
});
