import express from "express"
import path from "path"
import axios from "axios"
import cors from 'cors'

const app = express()
const port = 3000
const GITHUB_URL = "https://github.com/niklasmtj/gh-analytics";

const corsOptions = {
  origin: 'https://niklasmtj.github.io/gh-analytics',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(express.json())

app.post("/analytics", cors(corsOptions), async (req, res) => {
  const {pathName} = req.body;
  const f = pathName.split("/docs/")[1];
  await axios.get(GITHUB_URL + "/blob/main/docs/" + f);
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})