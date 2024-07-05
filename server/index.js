// backend/index.js
const repositoriesRouter = require("./routes/repositories");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 4000;

app.use("/repositories", repositoriesRouter)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
