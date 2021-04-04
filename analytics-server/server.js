import express from "express"
import path from "path"
import axios from "axios"
import cors from 'cors'

const app = express()
const port = 3000
const GITHUB_URL = "https://github.com/niklasmtj/gh-analytics";

app.use(cors())
app.use(express.json())

app.post("/analytics", async (req, res) => {
  const {pathName} = req.body;
  const f = pathName.split("/website/")[1];
  await axios.get(GITHUB_URL + "/blob/main/website/" + f);
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})