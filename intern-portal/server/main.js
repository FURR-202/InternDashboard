const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs').promises;
const DATA_FILE  = "./data.json"
app.use(cors());
app.use(express.json());
app.get('/api/intern', async (req, res, next) => {
  try{
    const data = await fs.readFile(DATA_FILE,"utf-8");
    const interns = JSON.parse(data);
    res.json(interns);
  }
  catch(error){
    res.status(500).json({ error: "Failed to load intern data" });
  }
});

app.listen(5000);
