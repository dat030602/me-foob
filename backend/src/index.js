const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const route = require("./routes");

var app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// dbOperation.getProducts().then((res) => {
//     console.log(res.recordset);
// });

route(app);

var port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`backend is running on http://localhost:${port}`);
});
