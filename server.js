const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const numberClassification = require("./routes/numberClassification");

// Middleware
app.use(cors());
app.use(express.json());

// Making use of the numberClassification.js route file
app.use("/api/numberClassification", numberClassification);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
