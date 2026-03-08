import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`server is listening to ${PORT}`);
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOSE_URI);
    console.log("Connect to DataBase");
  } catch (err) {
    console.log("Failed to connect with DB", err);
  }
};
