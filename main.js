const express = require("express");
const app = express();
const { addRecord, selectAllRecords } =require("./user");
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.get("/reference1", async (req, res) => {
  const list = await selectAllRecords();
  res.json(list);
});
app.post("/reference1", async (req, res) => {
  const obj = req.body;
  await addRecord(obj);
  consol.log(req.body);
  res.json({ message: "user added successfully" });
});
app.listen(8000, () => {
  console.log("server started");
  console.log("http//localhost:5000");
});
