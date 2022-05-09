const express = require('express');

const app = express();
app.use(express.json());

const dotenv = require('dotenv').config();

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

require('./initDB')();

app.get('/', (req, res) => {
    res.send(`Hello`);
})

const currencyRouter = require("./routes/currencyRouter");
const sizeRouter = require("./routes/sizeRouter");

app.use("/api/currencies", currencyRouter);
app.use("/api/sizes", sizeRouter);

/*const userRouter = require("./routes/userRouter");
const groupRouter = require("./routes/groupRouter");
const typeRouter = require("./routes/typeRouter");

app.use("/api/users", userRouter);
app.use("/api/groups", groupRouter);
app.use("/api/types", typeRouter);*/

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT + '...');
});

