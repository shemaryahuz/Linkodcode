import express from "express";
import cors from "cors";


const app = express();

app.use(cors())

app.use(express.json());

app.get("/hello", (req, res) => {
    res.json({ message: 'Hello from linkodcode server!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if (error) console.error(error);
    console.log(`Server is running on: http://localhost:${PORT}`);
});