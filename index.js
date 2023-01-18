const express = require("express");
const IORedis = require("ioredis");

const app = express();
const port = 3000;

const redis = new IORedis({
	host: "redis.hop",
	port: 6379,
});

app.get("/", async (req, res) => {
	const count = await redis.incr("count");
	res.send(`This page has been visited ${count} times!`);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
