import express from "express";
import IORedis from "ioredis";
import os from "node:os";

const hostname = os.hostname();
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
