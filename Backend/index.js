const express = require('express');
const app = express();
const PORT = 3001;
const mongoose = require('mongoose');
const { signup, signin, todo, todos, update, deletes, done, undone } = require('./routes/route');
const { auth } = require('./auth');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();


app.use(cors());


async function main() {
    await mongoose.connect(process.env.DATABASE_URL);
}
main();

app.use(express.json())

app.post("/signup", signup);

app.post("/signin", signin);

app.use(auth);

app.post("/todo", todo);

app.get("/todos", todos);

app.post("/update", update);

app.post("/deletes", deletes);

app.post("/done", done);

app.post("/undone", undone);


app.listen(PORT, () => {
    console.log("the server is listining on Port " + PORT);
})
