const express = require("express");
const IORedis = require("ioredis");
const hostname = require("os").hostname();

const app = express();
const port = 3000;

const redis = new IORedis({
	host: "redis.hop",
	port: 6379,
});

app.get("/", async (req, res) => {
	const count = await redis.incr("count");
	res.send(`${hostname}: Page has ${count} visits!`);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
